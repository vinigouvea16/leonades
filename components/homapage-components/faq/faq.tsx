'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { useTranslations } from 'next-intl'

export default function FAQ() {
  const t = useTranslations('home')
  return (
    <div className="flex lg:flex-row flex-col lg:items-start lg:mx-5 mx-3 space-y-4 lg:mt-20">
      <div className="flex lg:w-1/3 mx-auto">
        <h1 className="font-light text-4xl">FAQ</h1>
      </div>
      <Accordion
        type="single"
        collapsible
        className="lg:w-2/3"
        // defaultValue="item-1"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>{t('FAQQ1')}</AccordionTrigger>
          <AccordionContent>
            <p>{t('FAQA1')}</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>{t('FAQQ2')}</AccordionTrigger>
          <AccordionContent>
            <p>{t('FAQA2')}</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>{t('FAQQ3')}</AccordionTrigger>
          <AccordionContent>
            <p>{t('FAQA3')}</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>{t('FAQQ4')}</AccordionTrigger>
          <AccordionContent>
            <p>{t('FAQA4')}</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>{t('FAQQ5')}</AccordionTrigger>
          <AccordionContent>
            <p>{t('FAQA5')}</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
