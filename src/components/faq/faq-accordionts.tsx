import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const items = [
  {
    id: "item-1",
    question: "Why is digital marketing essential for my business?",
    answer: `Digital marketing enables businesses to connect with a broader
        audience, attract leads, drive website traffic, and enhance brand
        visibility. It offers measurable outcomes, supports targeted
        marketing efforts, and allows businesses to adapt and optimize
        strategies using data and insights.`,
  },
  {
    id: "item-2",
    question: "How can social media marketing help my business?",
    answer: `Social media marketing helps businesses to engage with their audience,
        increase brand awareness, and drive traffic to their website. It allows
        for targeted advertising and provides valuable insights into customer
        behavior and preferences.`,
  },
  {
    id: "item-3",
    question: "What are the benefits of SEO for my website?",
    answer: `SEO improves the visibility of a website on search engines, leading to
        increased organic traffic. It enhances the user experience, builds
        credibility, and can result in higher conversion rates. SEO also
        provides long-term benefits for online presence and brand authority.`,
  },
];

export default function FaqAccordionts() {
  return (
    <div className="md:w-6/12">
      <Accordion type="single" collapsible>
        {items.map((item) => (
          <AccordionItem key={item.id} value={item.id}>
            <AccordionTrigger className="text-left">
              {item.question}
            </AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
