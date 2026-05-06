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
const HighWaterCutCrisisConditionsEspStageSelection = lazy(() => import("@/pages/blog/category-1-pumps/high-water-cut-crisis-conditions-esp-stage-selection"));

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
const EmergencyPowerPlanningForEspMotorReliability = lazy(() => import("@/pages/blog/category-2-motors/emergency-power-planning-for-esp-motor-reliability"));

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
const SanctionDrivenFlaringLimitsAndEspSeparatorTuning = lazy(() => import("@/pages/blog/category-3-gas-separation/sanction-driven-flaring-limits-and-esp-separator-tuning"));

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
const OpecWarRiskAndEspFieldPlanning = lazy(() => import("@/pages/blog/category-4-integrated-solutions/opec-war-risk-and-esp-field-planning"));
const RefineryDisruptionsAndUpstreamEspStrategy = lazy(() => import("@/pages/blog/category-4-integrated-solutions/refinery-disruptions-and-upstream-esp-strategy"));
const CriticalCableSourcingForEspUnderShippingDisruptions = lazy(() => import("@/pages/blog/category-4-integrated-solutions/critical-cable-sourcing-for-esp-under-shipping-disruptions"));
const CybersecurityHardeningForEspControlSystems = lazy(() => import("@/pages/blog/category-4-integrated-solutions/cybersecurity-hardening-for-esp-control-systems"));

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
const ConflictZoneWorkoverWindowOptimizationForEsp = lazy(() => import("@/pages/blog/category-5-maintenance/conflict-zone-workover-window-optimization-for-esp"));
const PostConflictEspRestartIntegrityChecklist = lazy(() => import("@/pages/blog/category-5-maintenance/post-conflict-esp-restart-integrity-checklist"));
const OffshoreEspInterventionRiskCostPlanningDuringConflict = lazy(() => import("@/pages/blog/category-5-maintenance/offshore-esp-intervention-risk-cost-planning-during-conflict"));
const EspNpshrVsNpshaFieldVerification = lazy(() => import("@/pages/blog/category-1-pumps/esp-npshr-vs-npsha-field-verification"));
const AbrasiveSlurryStageMaterialSelectionEsp = lazy(() => import("@/pages/blog/category-1-pumps/abrasive-slurry-stage-material-selection-esp"));
const EspHydraulicResonanceMitigationPartialRate = lazy(() => import("@/pages/blog/category-1-pumps/esp-hydraulic-resonance-mitigation-partial-rate"));
const MultiphaseIntakeConditioningBeforeEspStages = lazy(() => import("@/pages/blog/category-1-pumps/multiphase-intake-conditioning-before-esp-stages"));
const EspMotorRotorDynamicBalanceOilfieldSpecs = lazy(() => import("@/pages/blog/category-2-motors/esp-motor-rotor-dynamic-balance-oilfield-specs"));
const DownholeTemperatureDeratingEspMotorLoadPlans = lazy(() => import("@/pages/blog/category-2-motors/downhole-temperature-derating-esp-motor-load-plans"));
const VsdRampHarmonicsEspMotorThresholdTuning = lazy(() => import("@/pages/blog/category-2-motors/vsd-ramp-harmonics-esp-motor-threshold-tuning"));
const EspMotorThrustVsPumpHydraulicCouplingReview = lazy(() => import("@/pages/blog/category-2-motors/esp-motor-thrust-vs-pump-hydraulic-coupling-review"));
const EspIntakeGasFractionStabilityKpis = lazy(() => import("@/pages/blog/category-3-gas-separation/esp-intake-gas-fraction-stability-kpis"));
const GasSlugScenariosSeparatorBypassGovernance = lazy(() => import("@/pages/blog/category-3-gas-separation/gas-slug-scenarios-separator-bypass-governance"));
const LowHeadingFluidGasBreakoutAtEspIntake = lazy(() => import("@/pages/blog/category-3-gas-separation/low-heading-fluid-gas-breakout-at-esp-intake"));
const RotaryGasSeparatorWearIndicatorsFieldReview = lazy(() => import("@/pages/blog/category-3-gas-separation/rotary-gas-separator-wear-indicators-field-review"));
const EspScadaTaggingStandardsUpstreamTeams = lazy(() => import("@/pages/blog/category-4-integrated-solutions/esp-scada-tagging-standards-upstream-teams"));
const EdgeTelemetryLatencyEspAlarmArchitecture = lazy(() => import("@/pages/blog/category-4-integrated-solutions/edge-telemetry-latency-esp-alarm-architecture"));
const BrownfieldEspRetrofitCivilElectricalBottlenecks = lazy(() => import("@/pages/blog/category-4-integrated-solutions/brownfield-esp-retrofit-civil-electrical-bottlenecks"));
const EspPowerFactorCorrectionUtilityInterfaceBasics = lazy(() => import("@/pages/blog/category-4-integrated-solutions/esp-power-factor-correction-utility-interface-basics"));
const EspPullForensicMetadataAndTrendingBasics = lazy(() => import("@/pages/blog/category-5-maintenance/esp-pull-forensic-metadata-and-trending-basics"));
const RigScheduleSlippageEspSparesBufferingStrategy = lazy(() => import("@/pages/blog/category-5-maintenance/rig-schedule-slippage-esp-spares-buffering-strategy"));
const H2sSourServiceEspSealElastomerSelection = lazy(() => import("@/pages/blog/category-5-maintenance/h2s-sour-service-esp-seal-elastomer-selection"));
const EspCommissioningVibrationBaselineAcceptance = lazy(() => import("@/pages/blog/category-5-maintenance/esp-commissioning-vibration-baseline-acceptance"));
const EspStageEfficiencyDegradationTrendMethod = lazy(() => import("@/pages/blog/category-1-pumps/esp-stage-efficiency-degradation-trend-method"));
const EspIntakeDepthAdjustmentUnderVariableDrawdown = lazy(() => import("@/pages/blog/category-1-pumps/esp-intake-depth-adjustment-under-variable-drawdown"));
const EspMotorInsulationAgingSignalsFromCurrentData = lazy(() => import("@/pages/blog/category-2-motors/esp-motor-insulation-aging-signals-from-current-data"));
const EspMotorCableSpliceQualityControlFieldProtocol = lazy(() => import("@/pages/blog/category-2-motors/esp-motor-cable-splice-quality-control-field-protocol"));
const SeparatorPerformanceAuditUnderRisingGor = lazy(() => import("@/pages/blog/category-3-gas-separation/separator-performance-audit-under-rising-gor"));
const EspGasLockNearMissInvestigationTemplate = lazy(() => import("@/pages/blog/category-3-gas-separation/esp-gas-lock-near-miss-investigation-template"));
const EspControlRoomAlarmRationalizationForMultiwellPads = lazy(() => import("@/pages/blog/category-4-integrated-solutions/esp-control-room-alarm-rationalization-for-multiwell-pads"));
const BrownfieldEspPowerUpgradeCutoverRiskChecklist = lazy(() => import("@/pages/blog/category-4-integrated-solutions/brownfield-esp-power-upgrade-cutover-risk-checklist"));
const EspFailureCodeTaxonomyForFleetLearning = lazy(() => import("@/pages/blog/category-5-maintenance/esp-failure-code-taxonomy-for-fleet-learning"));
const EspPreservationPlanForLongLeadSparesStorage = lazy(() => import("@/pages/blog/category-5-maintenance/esp-preservation-plan-for-long-lead-spares-storage"));
const EspBoosterPumpConfigurationHighViscosityOils = lazy(() => import("@/pages/blog/category-1-pumps/esp-booster-pump-configuration-high-viscosity-oils"));
const EmulsionViscosityShiftEspPumpCurveGovernance = lazy(() => import("@/pages/blog/category-1-pumps/emulsion-viscosity-shift-esp-pump-curve-governance"));
const EspMotorBearingLubricationFilmHealthIndicators = lazy(() => import("@/pages/blog/category-2-motors/esp-motor-bearing-lubrication-film-health-indicators"));
const EspMotorStartupCurrentCapTestingProtocol = lazy(() => import("@/pages/blog/category-2-motors/esp-motor-startup-current-cap-testing-protocol"));
const FoamyOilGasSeparatorInletConditioningChecklist = lazy(() => import("@/pages/blog/category-3-gas-separation/foamy-oil-gas-separator-inlet-conditioning-checklist"));
const Co2RichAssociatedGasEspIntakeMarginPlanning = lazy(() => import("@/pages/blog/category-3-gas-separation/co2-rich-associated-gas-esp-intake-margin-planning"));
const EspOtNetworkSegmentationBaselineForFieldSites = lazy(() => import("@/pages/blog/category-4-integrated-solutions/esp-ot-network-segmentation-baseline-for-field-sites"));
const EspRunbookHandoverFromProjectToOperations = lazy(() => import("@/pages/blog/category-4-integrated-solutions/esp-runbook-handover-from-project-to-operations"));
const EspLiftingProcedureLoadRiggingGovernance = lazy(() => import("@/pages/blog/category-5-maintenance/esp-lifting-procedure-load-rigging-governance"));
const EspWinterizationCondensationControlFieldChecklist = lazy(() => import("@/pages/blog/category-5-maintenance/esp-winterization-condensation-control-field-checklist"));
const EspDischargePressureInstabilityRootCauseGrid = lazy(() => import("@/pages/blog/category-1-pumps/esp-discharge-pressure-instability-root-cause-grid"));
const EspStageLoadingEnvelopeForRateRampOperations = lazy(() => import("@/pages/blog/category-1-pumps/esp-stage-loading-envelope-for-rate-ramp-operations"));
const EspMotorThermalRunawayPreventionUnderCycling = lazy(() => import("@/pages/blog/category-2-motors/esp-motor-thermal-runaway-prevention-under-cycling"));
const EspMotorGroundFaultTrendResponsePlaybook = lazy(() => import("@/pages/blog/category-2-motors/esp-motor-ground-fault-trend-response-playbook"));
const SeparatorCarryunderRiskWhenGorDropsSuddenly = lazy(() => import("@/pages/blog/category-3-gas-separation/separator-carryunder-risk-when-gor-drops-suddenly"));
const EspIntakeBubblePointMarginOperationsGuide = lazy(() => import("@/pages/blog/category-3-gas-separation/esp-intake-bubble-point-margin-operations-guide"));
const EspKpiGovernanceDashboardForAssetTeams = lazy(() => import("@/pages/blog/category-4-integrated-solutions/esp-kpi-governance-dashboard-for-asset-teams"));
const EspSpareCompatibilityMatrixDigitalControl = lazy(() => import("@/pages/blog/category-4-integrated-solutions/esp-spare-compatibility-matrix-digital-control"));
const EspPullPriorityScoringForConstrainedCrews = lazy(() => import("@/pages/blog/category-5-maintenance/esp-pull-priority-scoring-for-constrained-crews"));
const EspPostCommissioningStabilityAudit30DayPlan = lazy(() => import("@/pages/blog/category-5-maintenance/esp-post-commissioning-stability-audit-30-day-plan"));

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
        <Route path="/blog/high-water-cut-crisis-conditions-esp-stage-selection" component={HighWaterCutCrisisConditionsEspStageSelection} />
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
        <Route path="/blog/emergency-power-planning-for-esp-motor-reliability" component={EmergencyPowerPlanningForEspMotorReliability} />
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
        <Route path="/blog/sanction-driven-flaring-limits-and-esp-separator-tuning" component={SanctionDrivenFlaringLimitsAndEspSeparatorTuning} />
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
        <Route path="/blog/opec-war-risk-and-esp-field-planning" component={OpecWarRiskAndEspFieldPlanning} />
        <Route path="/blog/refinery-disruptions-and-upstream-esp-strategy" component={RefineryDisruptionsAndUpstreamEspStrategy} />
        <Route path="/blog/critical-cable-sourcing-for-esp-under-shipping-disruptions" component={CriticalCableSourcingForEspUnderShippingDisruptions} />
        <Route path="/blog/cybersecurity-hardening-for-esp-control-systems" component={CybersecurityHardeningForEspControlSystems} />
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
        <Route path="/blog/conflict-zone-workover-window-optimization-for-esp" component={ConflictZoneWorkoverWindowOptimizationForEsp} />
        <Route path="/blog/post-conflict-esp-restart-integrity-checklist" component={PostConflictEspRestartIntegrityChecklist} />
        <Route path="/blog/offshore-esp-intervention-risk-cost-planning-during-conflict" component={OffshoreEspInterventionRiskCostPlanningDuringConflict} />
        <Route path="/blog/esp-npshr-vs-npsha-field-verification" component={EspNpshrVsNpshaFieldVerification} />
        <Route path="/blog/abrasive-slurry-stage-material-selection-esp" component={AbrasiveSlurryStageMaterialSelectionEsp} />
        <Route path="/blog/esp-hydraulic-resonance-mitigation-partial-rate" component={EspHydraulicResonanceMitigationPartialRate} />
        <Route path="/blog/multiphase-intake-conditioning-before-esp-stages" component={MultiphaseIntakeConditioningBeforeEspStages} />
        <Route path="/blog/esp-motor-rotor-dynamic-balance-oilfield-specs" component={EspMotorRotorDynamicBalanceOilfieldSpecs} />
        <Route path="/blog/downhole-temperature-derating-esp-motor-load-plans" component={DownholeTemperatureDeratingEspMotorLoadPlans} />
        <Route path="/blog/vsd-ramp-harmonics-esp-motor-threshold-tuning" component={VsdRampHarmonicsEspMotorThresholdTuning} />
        <Route path="/blog/esp-motor-thrust-vs-pump-hydraulic-coupling-review" component={EspMotorThrustVsPumpHydraulicCouplingReview} />
        <Route path="/blog/esp-intake-gas-fraction-stability-kpis" component={EspIntakeGasFractionStabilityKpis} />
        <Route path="/blog/gas-slug-scenarios-separator-bypass-governance" component={GasSlugScenariosSeparatorBypassGovernance} />
        <Route path="/blog/low-heading-fluid-gas-breakout-at-esp-intake" component={LowHeadingFluidGasBreakoutAtEspIntake} />
        <Route path="/blog/rotary-gas-separator-wear-indicators-field-review" component={RotaryGasSeparatorWearIndicatorsFieldReview} />
        <Route path="/blog/esp-scada-tagging-standards-upstream-teams" component={EspScadaTaggingStandardsUpstreamTeams} />
        <Route path="/blog/edge-telemetry-latency-esp-alarm-architecture" component={EdgeTelemetryLatencyEspAlarmArchitecture} />
        <Route path="/blog/brownfield-esp-retrofit-civil-electrical-bottlenecks" component={BrownfieldEspRetrofitCivilElectricalBottlenecks} />
        <Route path="/blog/esp-power-factor-correction-utility-interface-basics" component={EspPowerFactorCorrectionUtilityInterfaceBasics} />
        <Route path="/blog/esp-pull-forensic-metadata-and-trending-basics" component={EspPullForensicMetadataAndTrendingBasics} />
        <Route path="/blog/rig-schedule-slippage-esp-spares-buffering-strategy" component={RigScheduleSlippageEspSparesBufferingStrategy} />
        <Route path="/blog/h2s-sour-service-esp-seal-elastomer-selection" component={H2sSourServiceEspSealElastomerSelection} />
        <Route path="/blog/esp-commissioning-vibration-baseline-acceptance" component={EspCommissioningVibrationBaselineAcceptance} />
        <Route path="/blog/esp-stage-efficiency-degradation-trend-method" component={EspStageEfficiencyDegradationTrendMethod} />
        <Route path="/blog/esp-intake-depth-adjustment-under-variable-drawdown" component={EspIntakeDepthAdjustmentUnderVariableDrawdown} />
        <Route path="/blog/esp-motor-insulation-aging-signals-from-current-data" component={EspMotorInsulationAgingSignalsFromCurrentData} />
        <Route path="/blog/esp-motor-cable-splice-quality-control-field-protocol" component={EspMotorCableSpliceQualityControlFieldProtocol} />
        <Route path="/blog/separator-performance-audit-under-rising-gor" component={SeparatorPerformanceAuditUnderRisingGor} />
        <Route path="/blog/esp-gas-lock-near-miss-investigation-template" component={EspGasLockNearMissInvestigationTemplate} />
        <Route path="/blog/esp-control-room-alarm-rationalization-for-multiwell-pads" component={EspControlRoomAlarmRationalizationForMultiwellPads} />
        <Route path="/blog/brownfield-esp-power-upgrade-cutover-risk-checklist" component={BrownfieldEspPowerUpgradeCutoverRiskChecklist} />
        <Route path="/blog/esp-failure-code-taxonomy-for-fleet-learning" component={EspFailureCodeTaxonomyForFleetLearning} />
        <Route path="/blog/esp-preservation-plan-for-long-lead-spares-storage" component={EspPreservationPlanForLongLeadSparesStorage} />
        <Route path="/blog/esp-booster-pump-configuration-high-viscosity-oils" component={EspBoosterPumpConfigurationHighViscosityOils} />
        <Route path="/blog/emulsion-viscosity-shift-esp-pump-curve-governance" component={EmulsionViscosityShiftEspPumpCurveGovernance} />
        <Route path="/blog/esp-motor-bearing-lubrication-film-health-indicators" component={EspMotorBearingLubricationFilmHealthIndicators} />
        <Route path="/blog/esp-motor-startup-current-cap-testing-protocol" component={EspMotorStartupCurrentCapTestingProtocol} />
        <Route path="/blog/foamy-oil-gas-separator-inlet-conditioning-checklist" component={FoamyOilGasSeparatorInletConditioningChecklist} />
        <Route path="/blog/co2-rich-associated-gas-esp-intake-margin-planning" component={Co2RichAssociatedGasEspIntakeMarginPlanning} />
        <Route path="/blog/esp-ot-network-segmentation-baseline-for-field-sites" component={EspOtNetworkSegmentationBaselineForFieldSites} />
        <Route path="/blog/esp-runbook-handover-from-project-to-operations" component={EspRunbookHandoverFromProjectToOperations} />
        <Route path="/blog/esp-lifting-procedure-load-rigging-governance" component={EspLiftingProcedureLoadRiggingGovernance} />
        <Route path="/blog/esp-winterization-condensation-control-field-checklist" component={EspWinterizationCondensationControlFieldChecklist} />
        <Route path="/blog/esp-discharge-pressure-instability-root-cause-grid" component={EspDischargePressureInstabilityRootCauseGrid} />
        <Route path="/blog/esp-stage-loading-envelope-for-rate-ramp-operations" component={EspStageLoadingEnvelopeForRateRampOperations} />
        <Route path="/blog/esp-motor-thermal-runaway-prevention-under-cycling" component={EspMotorThermalRunawayPreventionUnderCycling} />
        <Route path="/blog/esp-motor-ground-fault-trend-response-playbook" component={EspMotorGroundFaultTrendResponsePlaybook} />
        <Route path="/blog/separator-carryunder-risk-when-gor-drops-suddenly" component={SeparatorCarryunderRiskWhenGorDropsSuddenly} />
        <Route path="/blog/esp-intake-bubble-point-margin-operations-guide" component={EspIntakeBubblePointMarginOperationsGuide} />
        <Route path="/blog/esp-kpi-governance-dashboard-for-asset-teams" component={EspKpiGovernanceDashboardForAssetTeams} />
        <Route path="/blog/esp-spare-compatibility-matrix-digital-control" component={EspSpareCompatibilityMatrixDigitalControl} />
        <Route path="/blog/esp-pull-priority-scoring-for-constrained-crews" component={EspPullPriorityScoringForConstrainedCrews} />
        <Route path="/blog/esp-post-commissioning-stability-audit-30-day-plan" component={EspPostCommissioningStabilityAudit30DayPlan} />
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
