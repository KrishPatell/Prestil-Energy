import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/layout";
import { Analytics } from "@vercel/analytics/react";
import NotFound from "@/pages/not-found";

// Pages
import Home from "@/pages/home";
import About from "@/pages/about";
import Products from "@/pages/products";
import Manufacturing from "@/pages/manufacturing";
import Contact from "@/pages/contact";
import BlogIndex from "@/pages/blog/index";

// Blog Posts - Category 1: Pumps
import SubmersibleCentrifugalPumpsGuide from "@/pages/blog/category-1-pumps/submersible-centrifugal-pumps-guide";
import Pump92mmHousingAdvantages from "@/pages/blog/category-1-pumps/92mm-pump-housing-advantages";
import MultistagePumpDesign from "@/pages/blog/category-1-pumps/multistage-pump-design";
import PumpFlowRateSelection from "@/pages/blog/category-1-pumps/pump-flow-rate-selection";
import HeatResistantPumps from "@/pages/blog/category-1-pumps/heat-resistant-pumps";
import WearResistantPumps from "@/pages/blog/category-1-pumps/wear-resistant-pumps";
import PumpPerformanceCurves from "@/pages/blog/category-1-pumps/pump-performance-curves";
import ModularPumpDesign from "@/pages/blog/category-1-pumps/modular-pump-design";
import PumpValvesGuide from "@/pages/blog/category-1-pumps/pump-valves-guide";
import PumpReliabilityMTTF from "@/pages/blog/category-1-pumps/pump-reliability-mttf";
import CavitationNpshEspPumps from "@/pages/blog/category-1-pumps/cavitation-npsh-esp-pumps";
import SandSlurryPumpStageDesign from "@/pages/blog/category-1-pumps/sand-slurry-pump-stage-design";

// Blog Posts - Category 2: Motors
import SubmersibleMotorsGuide from "@/pages/blog/category-2-motors/submersible-motors-guide";
import MotorSectionsComparison from "@/pages/blog/category-2-motors/motor-sections-comparison";
import MotorDiameterSelection from "@/pages/blog/category-2-motors/motor-diameter-selection";
import Stator24SlotTechnology from "@/pages/blog/category-2-motors/24-slot-stator-technology";
import MotorPowerSelection from "@/pages/blog/category-2-motors/motor-power-selection";
import MotorVoltageGuide from "@/pages/blog/category-2-motors/motor-voltage-guide";
import MotorThermalManagement from "@/pages/blog/category-2-motors/motor-thermal-management";
import MotorInsulationSystems from "@/pages/blog/category-2-motors/motor-insulation-systems";
import MotorProtectorSystems from "@/pages/blog/category-2-motors/motor-protector-systems";
import MotorAPIISOCompliance from "@/pages/blog/category-2-motors/motor-api-iso-compliance";
import EspMotorThrustBearingSystems from "@/pages/blog/category-2-motors/esp-motor-thrust-bearing-systems";
import SubmersibleMotorCoolingJacketDesign from "@/pages/blog/category-2-motors/submersible-motor-cooling-jacket-design";

// Blog Posts - Category 3: Gas Separation
import GasSeparatorsGuide from "@/pages/blog/category-3-gas-separation/gas-separators-guide";
import RotaryGasSeparators from "@/pages/blog/category-3-gas-separation/rotary-gas-separators";
import SeparatorDisperserTechnology from "@/pages/blog/category-3-gas-separation/separator-disperser-technology";
import GasSeparatorSizing from "@/pages/blog/category-3-gas-separation/gas-separator-sizing";
import PreventingGasLock from "@/pages/blog/category-3-gas-separation/preventing-gas-lock";
import GasSeparatorIntakeHydraulics from "@/pages/blog/category-3-gas-separation/gas-separator-intake-hydraulics";
import HighGorEspFluidHandling from "@/pages/blog/category-3-gas-separation/high-gor-esp-fluid-handling";

// Blog Posts - Category 4: Integrated Solutions
import CompleteESPSystems from "@/pages/blog/category-4-integrated-solutions/complete-esp-systems";
import ESPSystemDesign from "@/pages/blog/category-4-integrated-solutions/esp-system-design";
import ESPCablesGuide from "@/pages/blog/category-4-integrated-solutions/esp-cables-guide";
import ESPControlStations from "@/pages/blog/category-4-integrated-solutions/esp-control-stations";
import ESPTelemetryMonitoring from "@/pages/blog/category-4-integrated-solutions/esp-telemetry-monitoring";
import EspSurfaceSwitchgearProtection from "@/pages/blog/category-4-integrated-solutions/esp-surface-switchgear-protection";
import EspDownholeMonitoringPressureSensors from "@/pages/blog/category-4-integrated-solutions/esp-downhole-monitoring-pressure-sensors";

// Blog Posts - Category 5: Maintenance
import ESPInstallationGuide from "@/pages/blog/category-5-maintenance/esp-installation-guide";
import ESPCommissioningChecklist from "@/pages/blog/category-5-maintenance/esp-commissioning-checklist";
import PredictiveMaintenanceESP from "@/pages/blog/category-5-maintenance/predictive-maintenance-esp";
import ESPTroubleshootingGuide from "@/pages/blog/category-5-maintenance/esp-troubleshooting-guide";
import MaximizingESPRunLife from "@/pages/blog/category-5-maintenance/maximizing-esp-run-life";
import EspRiglessInterventionOptions from "@/pages/blog/category-5-maintenance/esp-rigless-intervention-options";
import EspStorageHandlingField from "@/pages/blog/category-5-maintenance/esp-storage-handling-field";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/products" component={Products} />
        <Route path="/manufacturing" component={Manufacturing} />
        <Route path="/blog" component={BlogIndex} />
        {/* Category 1: Pumps */}
        <Route path="/blog/submersible-centrifugal-pumps-guide" component={SubmersibleCentrifugalPumpsGuide} />
        <Route path="/blog/92mm-pump-housing-advantages" component={Pump92mmHousingAdvantages} />
        <Route path="/blog/multistage-pump-design" component={MultistagePumpDesign} />
        <Route path="/blog/pump-flow-rate-selection" component={PumpFlowRateSelection} />
        <Route path="/blog/heat-resistant-pumps" component={HeatResistantPumps} />
        <Route path="/blog/wear-resistant-pumps" component={WearResistantPumps} />
        <Route path="/blog/pump-performance-curves" component={PumpPerformanceCurves} />
        <Route path="/blog/modular-pump-design" component={ModularPumpDesign} />
        <Route path="/blog/pump-valves-guide" component={PumpValvesGuide} />
        <Route path="/blog/pump-reliability-mttf" component={PumpReliabilityMTTF} />
        <Route path="/blog/cavitation-npsh-esp-pumps" component={CavitationNpshEspPumps} />
        <Route path="/blog/sand-slurry-pump-stage-design" component={SandSlurryPumpStageDesign} />
        {/* Category 2: Motors */}
        <Route path="/blog/submersible-motors-guide" component={SubmersibleMotorsGuide} />
        <Route path="/blog/motor-sections-comparison" component={MotorSectionsComparison} />
        <Route path="/blog/motor-diameter-selection" component={MotorDiameterSelection} />
        <Route path="/blog/24-slot-stator-technology" component={Stator24SlotTechnology} />
        <Route path="/blog/motor-power-selection" component={MotorPowerSelection} />
        <Route path="/blog/motor-voltage-guide" component={MotorVoltageGuide} />
        <Route path="/blog/motor-thermal-management" component={MotorThermalManagement} />
        <Route path="/blog/motor-insulation-systems" component={MotorInsulationSystems} />
        <Route path="/blog/motor-protector-systems" component={MotorProtectorSystems} />
        <Route path="/blog/motor-api-iso-compliance" component={MotorAPIISOCompliance} />
        <Route path="/blog/esp-motor-thrust-bearing-systems" component={EspMotorThrustBearingSystems} />
        <Route path="/blog/submersible-motor-cooling-jacket-design" component={SubmersibleMotorCoolingJacketDesign} />
        {/* Category 3: Gas Separation */}
        <Route path="/blog/gas-separators-guide" component={GasSeparatorsGuide} />
        <Route path="/blog/rotary-gas-separators" component={RotaryGasSeparators} />
        <Route path="/blog/separator-disperser-technology" component={SeparatorDisperserTechnology} />
        <Route path="/blog/gas-separator-sizing" component={GasSeparatorSizing} />
        <Route path="/blog/preventing-gas-lock" component={PreventingGasLock} />
        <Route path="/blog/gas-separator-intake-hydraulics" component={GasSeparatorIntakeHydraulics} />
        <Route path="/blog/high-gor-esp-fluid-handling" component={HighGorEspFluidHandling} />
        {/* Category 4: Integrated Solutions */}
        <Route path="/blog/complete-esp-systems" component={CompleteESPSystems} />
        <Route path="/blog/esp-system-design" component={ESPSystemDesign} />
        <Route path="/blog/esp-cables-guide" component={ESPCablesGuide} />
        <Route path="/blog/esp-control-stations" component={ESPControlStations} />
        <Route path="/blog/esp-telemetry-monitoring" component={ESPTelemetryMonitoring} />
        <Route path="/blog/esp-surface-switchgear-protection" component={EspSurfaceSwitchgearProtection} />
        <Route path="/blog/esp-downhole-monitoring-pressure-sensors" component={EspDownholeMonitoringPressureSensors} />
        {/* Category 5: Maintenance */}
        <Route path="/blog/esp-installation-guide" component={ESPInstallationGuide} />
        <Route path="/blog/esp-commissioning-checklist" component={ESPCommissioningChecklist} />
        <Route path="/blog/predictive-maintenance-esp" component={PredictiveMaintenanceESP} />
        <Route path="/blog/esp-troubleshooting-guide" component={ESPTroubleshootingGuide} />
        <Route path="/blog/maximizing-esp-run-life" component={MaximizingESPRunLife} />
        <Route path="/blog/esp-rigless-intervention-options" component={EspRiglessInterventionOptions} />
        <Route path="/blog/esp-storage-handling-field" component={EspStorageHandlingField} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
        <Analytics />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
