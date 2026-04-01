import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/layout";
import { Analytics } from "@vercel/analytics/react";
import { lazy, Suspense } from "react";
import NotFound from "@/pages/not-found";

// Pages
import Home from "@/pages/home";
const About = lazy(() => import("@/pages/about"));
const Products = lazy(() => import("@/pages/products"));
const Manufacturing = lazy(() => import("@/pages/manufacturing"));
const Contact = lazy(() => import("@/pages/contact"));
const BlogIndex = lazy(() => import("@/pages/blog/index"));

// Blog Posts - Category 1: Pumps
const SubmersibleCentrifugalPumpsGuide = lazy(() => import("@/pages/blog/category-1-pumps/submersible-centrifugal-pumps-guide"));
const Pump92mmHousingAdvantages = lazy(() => import("@/pages/blog/category-1-pumps/92mm-pump-housing-advantages"));
const MultistagePumpDesign = lazy(() => import("@/pages/blog/category-1-pumps/multistage-pump-design"));
const PumpFlowRateSelection = lazy(() => import("@/pages/blog/category-1-pumps/pump-flow-rate-selection"));
const HeatResistantPumps = lazy(() => import("@/pages/blog/category-1-pumps/heat-resistant-pumps"));
const WearResistantPumps = lazy(() => import("@/pages/blog/category-1-pumps/wear-resistant-pumps"));
const PumpPerformanceCurves = lazy(() => import("@/pages/blog/category-1-pumps/pump-performance-curves"));
const ModularPumpDesign = lazy(() => import("@/pages/blog/category-1-pumps/modular-pump-design"));
const PumpValvesGuide = lazy(() => import("@/pages/blog/category-1-pumps/pump-valves-guide"));
const PumpReliabilityMTTF = lazy(() => import("@/pages/blog/category-1-pumps/pump-reliability-mttf"));
const CavitationNpshEspPumps = lazy(() => import("@/pages/blog/category-1-pumps/cavitation-npsh-esp-pumps"));
const SandSlurryPumpStageDesign = lazy(() => import("@/pages/blog/category-1-pumps/sand-slurry-pump-stage-design"));
const EspPumpShaftCouplingAlignment = lazy(() => import("@/pages/blog/category-1-pumps/esp-pump-shaft-coupling-alignment"));
const EspPumpIntakeScreenSandControl = lazy(() => import("@/pages/blog/category-1-pumps/esp-pump-intake-screen-sand-control"));
const ConflictDrivenProductionReallocationEspPumpSizing = lazy(() => import("@/pages/blog/category-1-pumps/conflict-driven-production-reallocation-esp-pump-sizing"));
const OffshoreRiskZonesRedundantPumpDesign = lazy(() => import("@/pages/blog/category-1-pumps/offshore-risk-zones-redundant-pump-design"));

// Blog Posts - Category 2: Motors
const SubmersibleMotorsGuide = lazy(() => import("@/pages/blog/category-2-motors/submersible-motors-guide"));
const MotorSectionsComparison = lazy(() => import("@/pages/blog/category-2-motors/motor-sections-comparison"));
const MotorDiameterSelection = lazy(() => import("@/pages/blog/category-2-motors/motor-diameter-selection"));
const Stator24SlotTechnology = lazy(() => import("@/pages/blog/category-2-motors/24-slot-stator-technology"));
const MotorPowerSelection = lazy(() => import("@/pages/blog/category-2-motors/motor-power-selection"));
const MotorVoltageGuide = lazy(() => import("@/pages/blog/category-2-motors/motor-voltage-guide"));
const MotorThermalManagement = lazy(() => import("@/pages/blog/category-2-motors/motor-thermal-management"));
const MotorInsulationSystems = lazy(() => import("@/pages/blog/category-2-motors/motor-insulation-systems"));
const MotorProtectorSystems = lazy(() => import("@/pages/blog/category-2-motors/motor-protector-systems"));
const MotorAPIISOCompliance = lazy(() => import("@/pages/blog/category-2-motors/motor-api-iso-compliance"));
const EspMotorThrustBearingSystems = lazy(() => import("@/pages/blog/category-2-motors/esp-motor-thrust-bearing-systems"));
const SubmersibleMotorCoolingJacketDesign = lazy(() => import("@/pages/blog/category-2-motors/submersible-motor-cooling-jacket-design"));
const MotorEfficiencyIeStandardsEsp = lazy(() => import("@/pages/blog/category-2-motors/motor-efficiency-ie-standards-esp"));
const EspMotorVibrationMonitoring = lazy(() => import("@/pages/blog/category-2-motors/esp-motor-vibration-monitoring"));
const PowerGridInstabilityMotorSelectionEsp = lazy(() => import("@/pages/blog/category-2-motors/power-grid-instability-motor-selection-esp"));

// Blog Posts - Category 3: Gas Separation
const GasSeparatorsGuide = lazy(() => import("@/pages/blog/category-3-gas-separation/gas-separators-guide"));
const RotaryGasSeparators = lazy(() => import("@/pages/blog/category-3-gas-separation/rotary-gas-separators"));
const SeparatorDisperserTechnology = lazy(() => import("@/pages/blog/category-3-gas-separation/separator-disperser-technology"));
const GasSeparatorSizing = lazy(() => import("@/pages/blog/category-3-gas-separation/gas-separator-sizing"));
const PreventingGasLock = lazy(() => import("@/pages/blog/category-3-gas-separation/preventing-gas-lock"));
const GasSeparatorIntakeHydraulics = lazy(() => import("@/pages/blog/category-3-gas-separation/gas-separator-intake-hydraulics"));
const HighGorEspFluidHandling = lazy(() => import("@/pages/blog/category-3-gas-separation/high-gor-esp-fluid-handling"));
const GasFluidPropertiesSeparatorDesign = lazy(() => import("@/pages/blog/category-3-gas-separation/gas-fluid-properties-separator-design"));
const EspGasAnchorFluidVelocity = lazy(() => import("@/pages/blog/category-3-gas-separation/esp-gas-anchor-fluid-velocity"));
const WartimeAssociatedGasConstraintsSeparatorStrategy = lazy(() => import("@/pages/blog/category-3-gas-separation/wartime-associated-gas-constraints-separator-strategy"));
const CrudeRoutingChangesGorEspGasHandling = lazy(() => import("@/pages/blog/category-3-gas-separation/crude-routing-changes-gor-esp-gas-handling"));

// Blog Posts - Category 4: Integrated Solutions
const CompleteESPSystems = lazy(() => import("@/pages/blog/category-4-integrated-solutions/complete-esp-systems"));
const ESPSystemDesign = lazy(() => import("@/pages/blog/category-4-integrated-solutions/esp-system-design"));
const ESPCablesGuide = lazy(() => import("@/pages/blog/category-4-integrated-solutions/esp-cables-guide"));
const ESPControlStations = lazy(() => import("@/pages/blog/category-4-integrated-solutions/esp-control-stations"));
const ESPTelemetryMonitoring = lazy(() => import("@/pages/blog/category-4-integrated-solutions/esp-telemetry-monitoring"));
const ESPEnergyEfficiency2026 = lazy(() => import("@/pages/blog/category-4-integrated-solutions/esp-energy-efficiency-2026"));
const DigitalTwinESPSystems = lazy(() => import("@/pages/blog/category-4-integrated-solutions/digital-twin-esp-systems"));
const ESPSustainabilityESG = lazy(() => import("@/pages/blog/category-4-integrated-solutions/esp-sustainability-esg"));
const AIMLESPOptimization = lazy(() => import("@/pages/blog/category-4-integrated-solutions/ai-ml-esp-optimization"));
const ESPUnconventionalResources = lazy(() => import("@/pages/blog/category-4-integrated-solutions/esp-unconventional-resources"));
const EspSurfaceSwitchgearProtection = lazy(() => import("@/pages/blog/category-4-integrated-solutions/esp-surface-switchgear-protection"));
const EspDownholeMonitoringPressureSensors = lazy(() => import("@/pages/blog/category-4-integrated-solutions/esp-downhole-monitoring-pressure-sensors"));
const EspWellheadPenetratorCables = lazy(() => import("@/pages/blog/category-4-integrated-solutions/esp-wellhead-penetrator-cables"));
const EspSensorsVsdControlIntegration = lazy(() => import("@/pages/blog/category-4-integrated-solutions/esp-sensors-vsd-control-integration"));
const GeopoliticsOilPriceVolatilityEspOperations = lazy(() => import("@/pages/blog/category-4-integrated-solutions/geopolitics-oil-price-volatility-esp-operations"));
const MaritimeChokepointsAndEspProjectPlanning = lazy(() => import("@/pages/blog/category-4-integrated-solutions/maritime-chokepoints-and-esp-project-planning"));
const SanctionsComplianceAndEspSupplyChains = lazy(() => import("@/pages/blog/category-4-integrated-solutions/sanctions-compliance-and-esp-supply-chains"));

// Blog Posts - Category 5: Maintenance
const ESPInstallationGuide = lazy(() => import("@/pages/blog/category-5-maintenance/esp-installation-guide"));
const ESPCommissioningChecklist = lazy(() => import("@/pages/blog/category-5-maintenance/esp-commissioning-checklist"));
const PredictiveMaintenanceESP = lazy(() => import("@/pages/blog/category-5-maintenance/predictive-maintenance-esp"));
const ESPTroubleshootingGuide = lazy(() => import("@/pages/blog/category-5-maintenance/esp-troubleshooting-guide"));
const MaximizingESPRunLife = lazy(() => import("@/pages/blog/category-5-maintenance/maximizing-esp-run-life"));
const EspRiglessInterventionOptions = lazy(() => import("@/pages/blog/category-5-maintenance/esp-rigless-intervention-options"));
const EspStorageHandlingField = lazy(() => import("@/pages/blog/category-5-maintenance/esp-storage-handling-field"));
const EspPostPullInspectionAnalysis = lazy(() => import("@/pages/blog/category-5-maintenance/esp-post-pull-inspection-analysis"));
const EspChemicalCompatibilityMaterials = lazy(() => import("@/pages/blog/category-5-maintenance/esp-chemical-compatibility-materials"));
const StrategicSparesPlanningForEspUnderSanctions = lazy(() => import("@/pages/blog/category-5-maintenance/strategic-spares-planning-for-esp-under-sanctions"));
const ContingencyMaintenancePlansDuringConflict = lazy(() => import("@/pages/blog/category-5-maintenance/contingency-maintenance-plans-during-conflict"));

function Router() {
  return (
    <Layout>
      <Suspense fallback={<div className="min-h-[40vh]" />}>
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
        <Route path="/blog/esp-pump-shaft-coupling-alignment" component={EspPumpShaftCouplingAlignment} />
        <Route path="/blog/esp-pump-intake-screen-sand-control" component={EspPumpIntakeScreenSandControl} />
        <Route path="/blog/conflict-driven-production-reallocation-esp-pump-sizing" component={ConflictDrivenProductionReallocationEspPumpSizing} />
        <Route path="/blog/offshore-risk-zones-redundant-pump-design" component={OffshoreRiskZonesRedundantPumpDesign} />
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
        <Route path="/blog/motor-efficiency-ie-standards-esp" component={MotorEfficiencyIeStandardsEsp} />
        <Route path="/blog/esp-motor-vibration-monitoring" component={EspMotorVibrationMonitoring} />
        <Route path="/blog/power-grid-instability-motor-selection-esp" component={PowerGridInstabilityMotorSelectionEsp} />
        {/* Category 3: Gas Separation */}
        <Route path="/blog/gas-separators-guide" component={GasSeparatorsGuide} />
        <Route path="/blog/rotary-gas-separators" component={RotaryGasSeparators} />
        <Route path="/blog/separator-disperser-technology" component={SeparatorDisperserTechnology} />
        <Route path="/blog/gas-separator-sizing" component={GasSeparatorSizing} />
        <Route path="/blog/preventing-gas-lock" component={PreventingGasLock} />
        <Route path="/blog/gas-separator-intake-hydraulics" component={GasSeparatorIntakeHydraulics} />
        <Route path="/blog/high-gor-esp-fluid-handling" component={HighGorEspFluidHandling} />
        <Route path="/blog/gas-fluid-properties-separator-design" component={GasFluidPropertiesSeparatorDesign} />
        <Route path="/blog/esp-gas-anchor-fluid-velocity" component={EspGasAnchorFluidVelocity} />
        <Route path="/blog/wartime-associated-gas-constraints-separator-strategy" component={WartimeAssociatedGasConstraintsSeparatorStrategy} />
        <Route path="/blog/crude-routing-changes-gor-esp-gas-handling" component={CrudeRoutingChangesGorEspGasHandling} />
        {/* Category 4: Integrated Solutions */}
        <Route path="/blog/complete-esp-systems" component={CompleteESPSystems} />
        <Route path="/blog/esp-system-design" component={ESPSystemDesign} />
        <Route path="/blog/esp-cables-guide" component={ESPCablesGuide} />
        <Route path="/blog/esp-control-stations" component={ESPControlStations} />
        <Route path="/blog/esp-telemetry-monitoring" component={ESPTelemetryMonitoring} />
        <Route path="/blog/esp-energy-efficiency-2026" component={ESPEnergyEfficiency2026} />
        <Route path="/blog/digital-twin-esp-systems" component={DigitalTwinESPSystems} />
        <Route path="/blog/esp-sustainability-esg" component={ESPSustainabilityESG} />
        <Route path="/blog/ai-ml-esp-optimization" component={AIMLESPOptimization} />
        <Route path="/blog/esp-unconventional-resources" component={ESPUnconventionalResources} />
        <Route path="/blog/esp-surface-switchgear-protection" component={EspSurfaceSwitchgearProtection} />
        <Route path="/blog/esp-downhole-monitoring-pressure-sensors" component={EspDownholeMonitoringPressureSensors} />
        <Route path="/blog/esp-wellhead-penetrator-cables" component={EspWellheadPenetratorCables} />
        <Route path="/blog/esp-sensors-vsd-control-integration" component={EspSensorsVsdControlIntegration} />
        <Route path="/blog/geopolitics-oil-price-volatility-esp-operations" component={GeopoliticsOilPriceVolatilityEspOperations} />
        <Route path="/blog/maritime-chokepoints-and-esp-project-planning" component={MaritimeChokepointsAndEspProjectPlanning} />
        <Route path="/blog/sanctions-compliance-and-esp-supply-chains" component={SanctionsComplianceAndEspSupplyChains} />
        {/* Category 5: Maintenance */}
        <Route path="/blog/esp-installation-guide" component={ESPInstallationGuide} />
        <Route path="/blog/esp-commissioning-checklist" component={ESPCommissioningChecklist} />
        <Route path="/blog/predictive-maintenance-esp" component={PredictiveMaintenanceESP} />
        <Route path="/blog/esp-troubleshooting-guide" component={ESPTroubleshootingGuide} />
        <Route path="/blog/maximizing-esp-run-life" component={MaximizingESPRunLife} />
        <Route path="/blog/esp-rigless-intervention-options" component={EspRiglessInterventionOptions} />
        <Route path="/blog/esp-storage-handling-field" component={EspStorageHandlingField} />
        <Route path="/blog/esp-post-pull-inspection-analysis" component={EspPostPullInspectionAnalysis} />
        <Route path="/blog/esp-chemical-compatibility-materials" component={EspChemicalCompatibilityMaterials} />
        <Route path="/blog/strategic-spares-planning-for-esp-under-sanctions" component={StrategicSparesPlanningForEspUnderSanctions} />
        <Route path="/blog/contingency-maintenance-plans-during-conflict" component={ContingencyMaintenancePlansDuringConflict} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
      </Suspense>
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
