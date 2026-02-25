import Text from "@/components/atoms/Text";
import Title from "@/components/atoms/Title";
export default function PricingSection() {
  return (
    <>
      <div className="ds-bg p-7 flex justify-center flex-col items-center mt-2">
        <Title>Pricing Section</Title>
        <Text size="md">
          This section represents the Pricing Section of the website.
        </Text>
        <Text size="md" className="text-green-400">
          created by : Nehal Hamada
        </Text>
      </div>
    </>
  );
}
