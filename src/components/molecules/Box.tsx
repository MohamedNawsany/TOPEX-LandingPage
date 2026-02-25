import Title from "../atoms/Title";
import Text from "../atoms/Text";
export default function Box() {
  return (
    <div className="ds-bg p-5 py-10 ds-rounded-md text-center">
      <Title size="md">Create Your Survey</Title>
      <Text size="sm" variant="secondary">
        Choose a template or start from scratch using our easy-to-use builder
      </Text>
    </div>
  );
}
