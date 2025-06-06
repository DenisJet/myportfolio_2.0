import Experience from "@/components/Experience/Experience";
import { useTranslations } from "next-intl";

export default function About(): JSX.Element {
  const t = useTranslations("About");

  return (
    <main>
      <div className="container p-4 mx-auto max-w-4xl">
        <h1 className="gradient text-6xl font-bold mt-6 mb-6">{t("title")}</h1>
        <div className="font-light text-lg mb-3">
          {t("text")
            .split(".")
            .map((item, i) => {
              return (
                <p key={i} className="mb-2">
                  {item}.
                </p>
              );
            })}
        </div>
        <h2 className="text-xl font-semibold mb-4">{t("title-2")}</h2>
        <div className="p-0 mt-2 flex items-start flex-wrap">
          <div className="flex bg-slate-200 py-[3px] px-[15px] mr-2 mb-2 rounded space-x-2">
            JavaScript
          </div>
          <div className="flex bg-slate-200 py-[3px] px-[15px] mr-2 mb-2 rounded space-x-2">
            TypeScript
          </div>
          <div className="flex bg-slate-200 py-[3px] px-[15px] mr-2 mb-2 rounded space-x-2">
            HTML
          </div>
          <div className="flex bg-slate-200 py-[3px] px-[15px] mr-2 mb-2 rounded space-x-2">
            CSS
          </div>
          <div className="flex bg-slate-200 py-[3px] px-[15px] mr-2 mb-2 rounded space-x-2">
            SCSS
          </div>
        </div>
        <div className="p-0 mt-2 flex items-start flex-wrap">
          <div className="flex bg-slate-200 py-[3px] px-[15px] mr-2 mb-2 rounded space-x-2">
            React.Js
          </div>
          <div className="flex bg-slate-200 py-[3px] px-[15px] mr-2 mb-2 rounded space-x-2">
            Next.Js
          </div>
          <div className="flex bg-slate-200 py-[3px] px-[15px] mr-2 mb-2 rounded space-x-2">
            Redux
          </div>
          <div className="flex bg-slate-200 py-[3px] px-[15px] mr-2 mb-2 rounded space-x-2">
            Redux Toolkit
          </div>
        </div>
        <div className="p-0 mt-2 mb-3 flex items-start flex-wrap">
          <div className="flex bg-slate-200 py-[3px] px-[15px] mr-2 mb-2 rounded space-x-2">
            Gulp
          </div>
          <div className="flex bg-slate-200 py-[3px] px-[15px] mr-2 mb-2 rounded space-x-2">
            Webpack
          </div>
          <div className="flex bg-slate-200 py-[3px] px-[15px] mr-2 mb-2 rounded space-x-2">
            Vite
          </div>
          <div className="flex bg-slate-200 py-[3px] px-[15px] mr-2 mb-2 rounded space-x-2">
            Git
          </div>
          <div className="flex bg-slate-200 py-[3px] px-[15px] mr-2 mb-2 rounded space-x-2">
            Docker
          </div>
        </div>
        <div className="mb-3">
          <Experience />
        </div>
      </div>
    </main>
  );
}
