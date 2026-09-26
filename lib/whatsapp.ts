import { PHONE_NUMBER, Vehicle, LocaleCode } from "./data/vehicles";
import { getDictionary } from "./i18n";

/**
 * Builds a direct WhatsApp link with a custom or pre-filled contextual message.
 */
export function getWhatsAppLink(
  locale: LocaleCode,
  vehicle?: Vehicle
): string {
  let messageText = "";

  if (vehicle) {
    const template =
      vehicle.whatsappMessageTemplate[locale] ||
      vehicle.whatsappMessageTemplate.ar;
    const vehicleName = vehicle.name[locale] || vehicle.name.ar;
    messageText = template.replace("{vehicleName}", vehicleName);
  } else {
    const dict = getDictionary(locale);
    messageText = dict.whatsapp.genericMessage;
  }

  const encodedMessage = encodeURIComponent(messageText);
  return `https://wa.me/${PHONE_NUMBER}?text=${encodedMessage}`;
}
