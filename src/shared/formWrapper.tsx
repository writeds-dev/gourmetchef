"use client"

import { useEffect, useState } from "react";
import ContactForm from "./Form";

export default function ContactFormWrapper() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);  
  }, []);

  return isClient ? <ContactForm /> : null;  
}
