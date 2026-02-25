import Link from "next/link";
import { useTranslations } from "next-intl";
import Text from "../atoms/Text";
function Footer() {
  const t = useTranslations();
  return (
    <section className="bg-bg-alt ">
      <div className="container p-15">
        <div className="header border-bg grid grid-cols-1 justify-between border-b-1 pb-15 md:grid-cols-3">
          <div className="md:col-span-2">
            <Link href="/" className="font-semibold md:text-2xl">
              <span className="text-primary text-3xl">Survey</span>
              <span className="text-3xl">Land</span>
            </Link>
            <p className="mt-3 w-[57%]">footerDescLogo</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 py-12 md:grid-cols-4">
          <ul>
            <Link href="/">
              <li className="mb-1">footernav1</li>
            </Link>
            <Link href="/templates">
              <li className="mb-1">footer nav2</li>
            </Link>
            <Link href="/pricing">
              <li className="mb-1">footer nav3</li>
            </Link>
            <Link href="/faqs">
              <li>footer.nav4</li>
            </Link>
          </ul>

          <ul>
            <li className="mb-1">footer nav1</li>
            <li className="mb-1">footer.nav7</li>
            <li className="mb-1">footer.nav8</li>
            <li className="mb-1">footer.nav9</li>
          </ul>
          <div>
            <Text size="lg" className="font-normal">
              footer.headerEmail
            </Text>
            <Text size="lg" className="text-right font-normal" center={false}>
              footer.TextEmail
            </Text>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
