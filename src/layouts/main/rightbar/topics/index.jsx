import { topics } from "~/utils/const";
import Topic from "./topic";
import SidebarSection from "~/components/sidebar-section";

export default function Topics() {
  return (
    <SidebarSection more="/trends" title="İlgini çekebilicek gündemler">
      {topics.map((topic, index) => (
        <Topic item={topic} key={index} />
      ))}
    </SidebarSection>
  );
}
