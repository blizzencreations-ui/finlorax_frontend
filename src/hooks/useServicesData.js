// src/hooks/useServicesData.js
import { useState, useEffect } from "react";
import { SERVICES, SERVICE_ITEM_DETAILS } from "../constants/data";
import api from "../api/api";

/**
 * Converts the API response shape into the exact same shape as data.js.
 *
 * API shape:
 *   svc.details.sections[].items  →  [{ id, item, sort_order, itemDetail }]
 *
 * data.js shape:
 *   svc.details.sections[].items  →  ["string", ...]
 *   SERVICE_ITEM_DETAILS["string"] → { photo, photoAlt, badge, ... }
 *
 * After this transform both shapes are identical so every existing
 * component works without further changes.
 */
function normalizeApiServices(apiList) {
  const serviceItemDetails = {};

  const services = apiList.map((svc) => {
    const sections = (svc.details?.sections || []).map((sec) => ({
      heading:    sec.heading    || "",
      subheading: sec.subheading || undefined,
      items: (sec.items || []).map((itemObj) => {
        // Build the serviceItemDetails lookup as we walk each item
        if (itemObj.itemDetail) {
          serviceItemDetails[itemObj.item] = {
            photo:      itemObj.itemDetail.photo      || "",
            photoAlt:   itemObj.itemDetail.photoAlt   || "",
            badge:      itemObj.itemDetail.badge      || "",
            heading:    itemObj.itemDetail.heading    || "",
            subheading: itemObj.itemDetail.subheading || "",
            intro:      itemObj.itemDetail.intro      || "",
            cta:        itemObj.itemDetail.cta        || "",
            sections: (itemObj.itemDetail.sections || []).map((s) => ({
              heading: s.heading || "",
              body:    s.body    || undefined,
              items:   Array.isArray(s.items) ? s.items : [],
            })),
          };
        }
        // Return the plain string — that's what all components consume
        console.log("Normalizing item:", itemObj.item);
        return itemObj.item;
      }),
    }));

    return {
      id:          svc.id,
      icon:        svc.icon,
      title:       svc.title,
      desc:        svc.desc,
      accentColor: svc.accentColor || "#c9a84c",
      bgGradient:  svc.bgGradient  || "linear-gradient(135deg, #0b1e3d 0%, #122648 100%)",
      details: {
        intro:    svc.details?.intro || "",
        sections,
      },
    };
  });

  return { services, serviceItemDetails };
}

/**
 * useServicesData()
 *
 * Returns:
 *   services           – array shaped exactly like SERVICES from data.js
 *   serviceItemDetails – object shaped exactly like SERVICE_ITEM_DETAILS from data.js
 *   loading            – true while the first fetch is in-flight
 *   source             – "backend" | "fallback"
 *
 * Behaviour:
 *   1. Immediately serves data.js values (no flash of empty content).
 *   2. Fires GET /api/services in the background.
 *   3. On success replaces with normalised API data.
 *   4. On any error (network down, non-2xx, empty list) keeps data.js values.
 */
export function useServicesData() {
  const [services,           setServices]  = useState(SERVICES);
  const [serviceItemDetails, setSID]       = useState(SERVICE_ITEM_DETAILS);
  const [loading,            setLoading]   = useState(true);
  const [source,             setSource]    = useState("fallback");

  useEffect(() => {
    let cancelled = false;

    api
      .get("/services")
      .then((res) => {
        if (cancelled) return;
        console.log("✅ API RAW RESPONSE:", res.data);
        const list = res.data?.data;
        if (Array.isArray(list) && list.length > 0) {
          const normalized = normalizeApiServices(list);
            console.log("✅ NORMALIZED SERVICES:", normalized.services);
            console.log("✅ NORMALIZED ITEM DETAILS:", normalized.serviceItemDetails);

          setServices(normalized.services);
          setSID(normalized.serviceItemDetails);
          setSource("backend");
        }
        // Empty array → keep data.js fallback silently
      })
      .catch(() => {
        // Network error / 4xx / 5xx → keep data.js fallback silently
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => { cancelled = true; };
  }, []);

  return { services, serviceItemDetails, loading, source };
}
