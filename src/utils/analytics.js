/**
 * Utility functions for Meta Pixel (Facebook Pixel) tracking
 */

/**
 * Tracks the Meta Pixel "Contact" conversion event safely.
 * Protected against adblockers or delayed script loading.
 * 
 * @param {string} source - Where the contact originated (e.g., "Contact Form", "Floating WhatsApp", "Property Modal")
 * @param {Object} [customData={}] - Additional metadata for the event
 */
export function trackContactEvent(source = 'General', customData = {}) {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    try {
      window.fbq('track', 'Contact', {
        content_name: source,
        ...customData
      });
      console.log(`[Meta Pixel] 'Contact' event tracked successfully from source: ${source}`);
    } catch (error) {
      console.warn('[Meta Pixel] Error sending Contact event:', error);
    }
  } else {
    console.info(`[Meta Pixel] fbq not available or blocked by adblocker. Source: ${source}`);
  }
}
