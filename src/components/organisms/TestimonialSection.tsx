import Text from "../atoms/Text";
import Title from "../atoms/Title";
export default function TestimonialSection() {
  return (
    <div className="ds-bg p-7 flex justify-center flex-col items-center">
      <Title>TestimonialSection</Title>
      <Text size="md">
        This section represents the Testimonial Section of the website.
      </Text>
      <Text size="md" className="text-green-400">
        created by : Farah Ali
      </Text>
    </div>
  );
}
