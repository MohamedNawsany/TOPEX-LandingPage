import Text from "../atoms/Text";
import Title from "../atoms/Title";

export default function ContactsSection() {
  return (
    <div className="ds-bg p-7 flex justify-center flex-col items-center">
      <Title>ContactsSection</Title>
      <Text size="md">
        This section represents the ContactsSection of the website.
      </Text>
      <Text size="md" className="text-green-400">
        created by : Eslam Abo Elsoud
      </Text>
    </div>
  );
}
