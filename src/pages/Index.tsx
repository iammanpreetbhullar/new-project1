import { useState } from "react";

// Component imports will be added here automatically
import UserDashboard from "../components/UserDashboard";
import LoginPage from "../components/LoginPage";

export default function Index() {
  const [components] = useState(["LoginPage", "UserDashboard"]);
  const [activeComponent, setActiveComponent] = useState<string | null>(null);

  const renderComponent = (componentName: string) => {
    setActiveComponent(componentName);
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Generated Components</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {components.length === 0 ? (
          <p className="text-gray-500">No components generated yet.</p>
        ) : (
          components.map((component) => (
            <button
              key={component}
              onClick={() => renderComponent(component)}
              className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
            >
              {component}
            </button>
          ))
        )}
      </div>
      {activeComponent && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Preview: {activeComponent}</h2>
          <div className="border rounded-lg p-4">
            {/* Dynamic component rendering will happen here */}
          </div>
        </div>
      )}
    </div>
  );
}