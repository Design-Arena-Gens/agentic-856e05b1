"use client";

import Link from "next/link";
import { useMemo } from "react";

type Service = {
  title: string;
  description: string;
  icon: string;
};

type Project = {
  name: string;
  industry: string;
  result: string;
  href: string;
};

const services: Service[] = [
  {
    title: "مواقع مخصصة بالكامل",
    description: "تجربة مستخدم سلسة ومتفردة تناسب هوية علامتك وتحوّل الزوار إلى عملاء.",
    icon: "🎯"
  },
  {
    title: "واجهات تفاعلية",
    description: "بناء واجهات متجاوبة بسرعة عالية باستخدام React و Next.js مع أداء فائق.",
    icon: "⚡"
  },
  {
    title: "إطلاق وتسويق رقمي",
    description: "دمج أدوات التحليل وحملات التسويق لقياس النتائج وتحسين الأداء باستمرار.",
    icon: "📈"
  }
];

const projects: Project[] = [
  {
    name: "منصة نور التعليمية",
    industry: "تقنية تعليمية",
    result: "زيادة التسجيلات الشهرية بنسبة 68%",
    href: "#"
  },
  {
    name: "متحف الفن الحديث",
    industry: "ثقافة وفنون",
    result: "أكثر من 120 ألف زائر خلال أول ثلاثة أشهر",
    href: "#"
  },
  {
    name: "حاضنة بادر للأعمال",
    industry: "شركات ناشئة",
    result: "تجربة رقمية تساهم في جذب المستثمرين والشركاء",
    href: "#"
  }
];

const steps = [
  {
    id: "01",
    title: "جلسة اكتشاف الهوية",
    text: "نستمع إلى أهدافك، جمهورك المستهدف، وقصة علامتك لنحدد أفضل إستراتيجية رقمية."
  },
  {
    id: "02",
    title: "تصميم تجربة متكاملة",
    text: "نعمل على تصميم بصري متكامل يركز على قابلية الاستخدام والتحويل عبر جميع الأجهزة."
  },
  {
    id: "03",
    title: "تطوير وتسليم سريع",
    text: "نبني الموقع باستخدام أحدث التقنيات، مع اختبارات دقيقة لضمان الأداء والحماية."
  },
  {
    id: "04",
    title: "إطلاق ودعم مستمر",
    text: "نطلق الموقع على Vercel، نقدم التدريب والدعم، ونراقب الأداء لتحسين النتائج."
  }
];

const stats = [
  { label: "مواقع تم إطلاقها", value: "120+" },
  { label: "معدل رضا العملاء", value: "96%" },
  { label: "متوسط سرعة التحميل", value: "1.1 ثانية" },
  { label: "دول نخدمها", value: "7" }
];

export default function Home() {
  const renderStats = useMemo(
    () =>
      stats.map((item) => (
        <div key={item.label} className="rounded-2xl border border-white/10 p-6 glass">
          <p className="text-3xl font-semibold text-primary-foreground heading">{item.value}</p>
          <p className="mt-2 text-sm text-slate-300">{item.label}</p>
        </div>
      )),
    []
  );

  return (
    <main className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-20 px-6 py-12">
      <section className="relative overflow-hidden rounded-3xl border border-white/10 p-10 md:p-16 glass">
        <div className="absolute inset-0 -z-10 hero-gradient opacity-10" />
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm text-slate-300">
              <span className="text-lg">✨</span> استوديو النور الرقمي
            </span>
            <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-6xl heading">
              نعم، نبني مواقع إلكترونية تلمع وتُقنع.
            </h1>
            <p className="mt-6 text-lg text-slate-300">
              فريق مختص في تصميم وتطوير مواقع ويب عصرية بواجهة عربية متمكنة وتجربة مستخدم تضع العملاء في قلب
              التجربة. نبني حضورك الرقمي باستخدام أحدث تقنيات الويب وأفضل ممارسات تجربة الاستخدام.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="mailto:hello@studio-noor.com"
                className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 font-medium text-primary-foreground shadow-glow transition hover:translate-y-0.5 hover:shadow-xl"
              >
                اطلب استشارة مجانية
              </Link>
              <Link
                href="#portfolio"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-3 font-medium text-slate-200 transition hover:border-primary hover:text-primary"
              >
                شاهد نماذج الأعمال
              </Link>
            </div>
          </div>
          <div className="relative isolate mt-8 w-full max-w-sm self-center rounded-3xl bg-white/5 p-6 text-slate-900 shadow-2xl lg:mt-0">
            <div className="absolute -left-8 top-6 h-12 w-12 rounded-full accent-gradient blur-2xl" />
            <div className="absolute -right-6 bottom-6 h-16 w-16 rounded-full hero-gradient blur-3xl" />
            <div className="rounded-3xl bg-slate-900 p-6 text-slate-100 shadow-inner ring-1 ring-white/10">
              <h2 className="heading text-2xl font-semibold text-white">جدول إطلاق مشروعك</h2>
              <ul className="mt-6 space-y-5 text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-xl">🗓️</span>
                  <span>
                    الأسبوع 1: جلسة اكتشاف وتحليل متطلبات المشروع، تخطيط تجربة المستخدم، تحديد الأهداف الرقمية.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-xl">🎨</span>
                  <span>الأسبوع 2-3: تصميم واجهات متجاوبة، مراجعات تكرارية، إعداد هوية مرئية رقمية.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-xl">💻</span>
                  <span>الأسبوع 4: تطوير الموقع باستخدام Next.js، إعداد لوحة التحكم والتكاملات.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-xl">🚀</span>
                  <span>الأسبوع 5: اختبارات شاملة، إطلاق على Vercel، دعم مستمر وتحسين الأداء.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">{renderStats}</section>

      <section className="grid gap-6 rounded-3xl border border-white/10 p-10 glass md:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.title}
            className="relative flex flex-col gap-4 rounded-3xl border border-white/5 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-white/20"
          >
            <span className="text-3xl">{service.icon}</span>
            <h3 className="text-2xl font-semibold heading text-white">{service.title}</h3>
            <p className="text-slate-300">{service.description}</p>
            <span className="mt-auto text-sm text-slate-400">يشمل تحليلًا كاملًا وخطة نمو رقمية</span>
          </article>
        ))}
      </section>

      <section
        id="portfolio"
        className="grid gap-8 rounded-3xl border border-white/10 p-10 glass lg:grid-cols-[1.1fr_1fr]"
      >
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-semibold heading text-white">قصص نجاح تبني الثقة</h2>
            <p className="mt-4 text-slate-300">
              مشاريعنا تتراوح بين المنصات التعليمية والجهات الثقافية والشركات الناشئة. التركيز دائمًا على تجربة
              مستخدم مبهرة، أداء سريع، وتحويل فعلي يقاس بأرقام واضحة.
            </p>
          </div>
          <div className="mt-10 grid gap-4 text-sm text-slate-300">
            <p>✓ مواقع متعددة اللغات جاهزة للانتشار الإقليمي والعالمي</p>
            <p>✓ تكامل مع أنظمة الدفع، الحجز، الأنظمة الداخلية، و CRMs</p>
            <p>✓ بناء أنظمة إدارة محتوى مرنة وسهلة التحرير والاستجابة</p>
          </div>
        </div>
        <div className="grid gap-6">
          {projects.map((project) => (
            <article key={project.name} className="rounded-3xl border border-white/5 bg-white/5 p-6">
              <h3 className="text-xl font-semibold heading text-white">{project.name}</h3>
              <p className="mt-2 text-sm text-slate-400">{project.industry}</p>
              <p className="mt-4 text-slate-300">{project.result}</p>
              <Link
                href={project.href}
                className="mt-6 inline-flex items-center text-sm text-primary transition hover:text-secondary"
              >
                استعرض تفاصيل المشروع →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-white/10 p-10 glass">
        <h2 className="text-3xl font-semibold heading text-white">كيف نعمل معك خطوة بخطوة؟</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {steps.map((step) => (
            <div key={step.id} className="flex gap-6 rounded-3xl border border-white/5 bg-white/5 p-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/20 text-lg font-semibold text-primary heading">
                {step.id}
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold heading text-white">{step.title}</h3>
                <p className="text-slate-300">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-l from-primary/10 via-slate-900 to-slate-950 p-10">
        <div className="absolute inset-y-0 left-0 hidden w-1/2 bg-[url('/mesh.svg')] bg-cover bg-right opacity-20 lg:block" />
        <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <h2 className="text-3xl font-semibold heading text-white">
              هل أنت جاهز لموقع يعبّر عن هويتك ويزيد من نتائجك؟
            </h2>
            <p className="mt-4 text-slate-200">
              أرسل لنا تفاصيل مشروعك أو احجز جلسة استشارية. سنعود إليك خلال 24 ساعة بخطة تفصيلية وزمن تسليم واضح.
            </p>
          </div>
          <div className="w-full max-w-md rounded-3xl bg-slate-950/70 p-6 ring-1 ring-white/10">
            <form
              className="flex flex-col gap-4 text-slate-900"
              action="https://formspree.io/f/xpzvnwdk"
              method="POST"
            >
              <input
                className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
                placeholder="اسمك الكامل"
                name="name"
                required
                autoComplete="name"
              />
              <input
                className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
                placeholder="البريد الإلكتروني"
                type="email"
                name="email"
                required
                autoComplete="email"
              />
              <textarea
                className="min-h-[120px] w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
                placeholder="أخبرنا عن رؤيتك وأهدافك الرقمية"
                name="message"
                required
              />
              <button
                type="submit"
                className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
              >
                أرسل طلبك الآن
              </button>
            </form>
            <p className="mt-3 text-xs text-slate-400">
              بإرسال الطلب أنت توافق على تلقي رسالة متابعة متعلقة بمشروعك. نحترم خصوصيتك ونلتزم بحماية بياناتك.
            </p>
          </div>
        </div>
      </section>

      <footer className="flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} استوديو النور - جميع الحقوق محفوظة.</p>
        <div className="flex gap-4">
          <Link href="https://www.behance.net" className="transition hover:text-primary">
            Behance
          </Link>
          <Link href="https://www.linkedin.com" className="transition hover:text-primary">
            LinkedIn
          </Link>
          <Link href="https://wa.me/966500000000" className="transition hover:text-primary">
            WhatsApp
          </Link>
        </div>
      </footer>
    </main>
  );
}
