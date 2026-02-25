import Text from "@/components/atoms/Text";
import Title from "@/components/atoms/Title";
export default function ContactSection() {
  return (
    <div className="ds-bg p-7 flex justify-center flex-col items-center">
      <Title>Contact Section</Title>
      <Text size="md">
        This section represents the Contact Section of the website.
      </Text>
      <Text size="md" className="text-green-400">
        created by : Shorook Khaled
      </Text>
    </div>
  );
}
