import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Оферта — Nemo Agent",
  description: "Публичная оферта Nemo Agent — условия подписки, оплаты, возврата. Тарифы Free/Start/Pro/Business/Enterprise.",
  alternates: { canonical: "/offer" },
};

export default function OfferPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h1 className="display text-4xl text-paper md:text-5xl">{"Публичная оферта"}</h1>
            <div className="prose-nemo mt-10 space-y-6 text-ink-muted">
              <p className="text-sm text-ink-dim">Дата публикации: 2026-06-09 · Редакция: 1.0</p>
              <p>Настоящий документ является публичной офертой (предложением) ИП Никопекин А.С. (далее — Исполнитель) заключить договор возмездного оказания услуг по подписке на программный продукт «Nemo Agent» (далее — Услуга) на изложенных ниже условиях.</p>
              <h2 className="font-display text-2xl text-paper mt-10">1. Предмет договора</h2>
              <p>Исполнитель предоставляет Заказчику доступ к программному обеспечению Nemo Agent (ИИ-агент на базе Hermes Agent), включая Telegram-бот, личный кабинет и облачную инфраструктуру, на условиях выбранного тарифа. Доступ предоставляется в течение 24 часов с момента подтверждения оплаты.</p>
              <h2 className="font-display text-2xl text-paper mt-10">2. Стоимость и порядок оплаты</h2>
              <p>Стоимость Услуги определяется выбранным тарифом (Free / Start / Pro / Business / Enterprise). Оплата производится в рублях РФ через платёжный шлюз ЮKassa (АО «ЮMoney»). Подписка продлевается автоматически в конце оплаченного периода; отмена возможна в любой момент в личном кабинете.</p>
              <h2 className="font-display text-2xl text-paper mt-10">3. Возврат средств</h2>
              <p>Возврат денежных средств за неиспользованный период подписки осуществляется по заявлению Заказчика в течение 14 календарных дней с момента оплаты за вычетом фактически понесённых расходов Исполнителя (не более 30% от суммы).</p>
              <h2 className="font-display text-2xl text-paper mt-10">4. Ограничения использования</h2>
              <p>Заказчик обязуется не использовать Услугу для: спама, мошенничества, нарушения законодательства РФ, генерации запрещённого контента. Исполнитель вправе заблокировать доступ при нарушении без возврата средств.</p>
              <h2 className="font-display text-2xl text-paper mt-10">5. Обработка персональных данных</h2>
              <p>Обработка ПДн осуществляется в соответствии с Федеральным законом № 152-ФЗ «О персональных данных» и Политикой конфиденциальности Исполнителя.</p>
              <h2 className="font-display text-2xl text-paper mt-10">6. Реквизиты</h2>
              <p>ИП Никопекин А.С. (регистрация в процессе). Юридический адрес: будет указан после регистрации ИП. Email: offer@nemoagent.ru</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
