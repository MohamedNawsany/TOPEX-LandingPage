import Text from "@/components/atoms/Text";
import Title from "@/components/atoms/Title";
export default function HeroSections() {
  return (
    <div className="ds-bg p-7 flex justify-center flex-col items-center">
      <Title>FeatureSection</Title>
      <Text size="md">
        This section represents the Feature Section of the website.
      </Text>
      <Text size="md" className="text-green-400">
        created by : Manar Taha
      </Text>
    </div>
  );
}
