  import {startQuestionnaire} from '../../../helpers'

  import GeographicMarkets from '../../../pages/surveys/ukis/geographic-markets.page.js'
  import SignificantEvents from '../../../pages/surveys/ukis/significant-events.page.js'
  import GeneralBusinessInformationCompleted from '../../../pages/surveys/ukis/general-business-information-completed.page.js'
  import BusinessChanges from '../../../pages/surveys/ukis/business-changes.page.js'
  import BusinessStrategyPracticesCompleted from '../../../pages/surveys/ukis/business-strategy-practices-completed.page.js'
  import InternalInvestmentRD from '../../../pages/surveys/ukis/internal-investment-r-d.page.js'
  import YearsInternalInvestmentRD from '../../../pages/surveys/ukis/years-internal-investment-r-d.page.js'
  import ExpenditureInternalInvestmentRD from '../../../pages/surveys/ukis/expenditure-internal-investment-r-d.page.js'
  import AcquisitionInternalInvestmentRD from '../../../pages/surveys/ukis/acquisition-internal-investment-r-d.page.js'
  import AmountAcquisitionInternalInvestmentRD from '../../../pages/surveys/ukis/amount-acquisition-internal-investment-r-d.page.js'
  import InvestmentAdvancedMachinery from '../../../pages/surveys/ukis/investment-advanced-machinery.page.js'
  import InvestmentPurposesInnovation from '../../../pages/surveys/ukis/investment-purposes-innovation.page.js'
  import AmountAcquisitionAdvancedMachinery from '../../../pages/surveys/ukis/amount-acquisition-advanced-machinery.page.js'
  import InvestmentExistingKnowledgeInnovation from '../../../pages/surveys/ukis/investment-existing-knowledge-innovation.page.js'
  import ExpenditureExisting2016 from '../../../pages/surveys/ukis/expenditure-existing-2016.page.js'
  import InvestmentTrainingInnovative from '../../../pages/surveys/ukis/investment-training-innovative.page.js'
  import ExpenditureTrainingInnovative2016 from '../../../pages/surveys/ukis/expenditure-training-innovative-2016.page.js'
  import InvestmentDesignFutureInnovation from '../../../pages/surveys/ukis/investment-design-future-innovation.page.js'
  import ExpenditureDesign2016 from '../../../pages/surveys/ukis/expenditure-design-2016.page.js'
  import InvestmentIntroductionInnovations from '../../../pages/surveys/ukis/investment-introduction-innovations.page.js'
  import InvestmentPurposesInnovation2 from '../../../pages/surveys/ukis/investment-purposes-innovation-2.page.js'
  import ExpenditureIntroductionInnovations2016 from '../../../pages/surveys/ukis/expenditure-introduction-innovations-2016.page.js'
  import InnovationInvestmentCompleted from '../../../pages/surveys/ukis/innovation-investment-completed.page.js'
  import IntroducingSignificantlyImprovedGoods from '../../../pages/surveys/ukis/introducing-significantly-improved-goods.page.js'
  import EntityDevelopedTheseGoods from '../../../pages/surveys/ukis/entity-developed-these-goods.page.js'
  import IntroduceSignificantlyImprovement from '../../../pages/surveys/ukis/introduce-significantly-improvement.page.js'
  import EntityMainlyDevelopedThese from '../../../pages/surveys/ukis/entity-mainly-developed-these.page.js'
  import NewGoodsServicesInnovations from '../../../pages/surveys/ukis/new-goods-services-innovations.page.js'
  import GoodsServicesInnovationsNew from '../../../pages/surveys/ukis/goods-services-innovations-new.page.js'
  import PercentageTurnover2016 from '../../../pages/surveys/ukis/percentage-turnover-2016.page.js'
  import GoodsAndServicesInnovationCompleted from '../../../pages/surveys/ukis/goods-and-services-innovation-completed.page.js'
  import ProcessImproved from '../../../pages/surveys/ukis/process-improved.page.js'
  import DevelopedProcesses from '../../../pages/surveys/ukis/developed-processes.page.js'
  import ImprovedProcesses from '../../../pages/surveys/ukis/improved-processes.page.js'
  import ProcessInnovationCompleted from '../../../pages/surveys/ukis/process-innovation-completed.page.js'
  import ConstraintsInnovationActivities from '../../../pages/surveys/ukis/constraints-innovation-activities.page.js'
  import ConstrainingInnovationEconomic from '../../../pages/surveys/ukis/constraining-innovation-economic.page.js'
  import ConstrainingInnovationCosts from '../../../pages/surveys/ukis/constraining-innovation-costs.page.js'
  import ConstrainingInnovationFinance from '../../../pages/surveys/ukis/constraining-innovation-finance.page.js'
  import ConstrainingInnovationAvailableFinance from '../../../pages/surveys/ukis/constraining-innovation-available-finance.page.js'
  import ConstrainingInnovationLackQualified from '../../../pages/surveys/ukis/constraining-innovation-lack-qualified.page.js'
  import ConstrainingInnovationLackTechnology from '../../../pages/surveys/ukis/constraining-innovation-lack-technology.page.js'
  import ConstrainingInnovationLackInformation from '../../../pages/surveys/ukis/constraining-innovation-lack-information.page.js'
  import ConstrainingInnovationDominated from '../../../pages/surveys/ukis/constraining-innovation-dominated.page.js'
  import ConstrainingInnovationUncertain from '../../../pages/surveys/ukis/constraining-innovation-uncertain.page.js'
  import ConstrainingInnovationGovernment from '../../../pages/surveys/ukis/constraining-innovation-government.page.js'
  import ConstrainingInnovationEu from '../../../pages/surveys/ukis/constraining-innovation-eu.page.js'
  import ConstrainingInnovationReferendum from '../../../pages/surveys/ukis/constraining-innovation-referendum.page.js'
  import ConstrainingInnovationNotNecessary from '../../../pages/surveys/ukis/constraining-innovation-notnecessary.page.js'
  import ConstraintsOnInnovationCompleted from '../../../pages/surveys/ukis/constraints-on-innovation-completed.page.js'
  import FactorsAffectingIncreasingRange from '../../../pages/surveys/ukis/factors-affecting-increasing-range.page.js'
  import FactorsAffectingNewMarkets from '../../../pages/surveys/ukis/factors-affecting-new-markets.page.js'
  import FactorsAffectingMarketShare from '../../../pages/surveys/ukis/factors-affecting-market-share.page.js'
  import FactorsAffectingQuality from '../../../pages/surveys/ukis/factors-affecting-quality.page.js'
  import FactorsAffectingFlexibility from '../../../pages/surveys/ukis/factors-affecting-flexibility.page.js'
  import FactorsAffectingCapacity from '../../../pages/surveys/ukis/factors-affecting-capacity.page.js'
  import FactorsAffectingValue from '../../../pages/surveys/ukis/factors-affecting-value.page.js'
  import FactorsAffectingReducingCost from '../../../pages/surveys/ukis/factors-affecting-reducing-cost.page.js'
  import FactorsAffectingHealthSafety from '../../../pages/surveys/ukis/factors-affecting-health-safety.page.js'
  import FactorsAffectingEnvironmental from '../../../pages/surveys/ukis/factors-affecting-environmental.page.js'
  import FactorsAffectingReplacing from '../../../pages/surveys/ukis/factors-affecting-replacing.page.js'
  import FactorsAffectingRegulatory from '../../../pages/surveys/ukis/factors-affecting-regulatory.page.js'
  import FactorsAffectingCompleted from '../../../pages/surveys/ukis/factors-affecting-completed.page.js'
  import ImportancesInformationInnovation from '../../../pages/surveys/ukis/importances-information-innovation.page.js'
  import ImportancesInformationSuppliers from '../../../pages/surveys/ukis/importances-information-suppliers.page.js'
  import ImportancesInformationClient from '../../../pages/surveys/ukis/importances-information-client.page.js'
  import ImportancesInformationPublicSector from '../../../pages/surveys/ukis/importances-information-public-sector.page.js'
  import ImportancesInformationCompetitors from '../../../pages/surveys/ukis/importances-information-competitors.page.js'
  import ImportancesInformationConsultants from '../../../pages/surveys/ukis/importances-information-consultants.page.js'
  import ImportancesInformationUniversities from '../../../pages/surveys/ukis/importances-information-universities.page.js'
  import ImportancesInformationGovernment from '../../../pages/surveys/ukis/importances-information-government.page.js'
  import ImportancesInformationConferences from '../../../pages/surveys/ukis/importances-information-conferences.page.js'
  import ImportancesInformationAssociations from '../../../pages/surveys/ukis/importances-information-associations.page.js'
  import ImportancesInformationStandards from '../../../pages/surveys/ukis/importances-information-standards.page.js'
  import ImportancesInformationPublications from '../../../pages/surveys/ukis/importances-information-publications.page.js'
  import InformationNeededForInnovationCompleted from '../../../pages/surveys/ukis/information-needed-for-innovation-completed.page.js'
  import CoOperationOtherBusinesses from '../../../pages/surveys/ukis/co-operation-other-businesses.page.js'
  import CoOperationSuppliers from '../../../pages/surveys/ukis/co-operation-suppliers.page.js'
  import CoOperationPrivateSector from '../../../pages/surveys/ukis/co-operation-private-sector.page.js'
  import CoOperationPublicSector from '../../../pages/surveys/ukis/co-operation-public-sector.page.js'
  import CoOperationCompetitors from '../../../pages/surveys/ukis/co-operation-competitors.page.js'
  import CoOperationConsultants from '../../../pages/surveys/ukis/co-operation-consultants.page.js'
  import CoOperationInstitutions from '../../../pages/surveys/ukis/co-operation-institutions.page.js'
  import CoOperationGovernment from '../../../pages/surveys/ukis/co-operation-government.page.js'
  import NotNecessaryPossible from '../../../pages/surveys/ukis/not-necessary-possible.page.js'
  import InnovationsProtectedPatents from '../../../pages/surveys/ukis/innovations-protected-patents.page.js'
  import InnovationsProtectedDesign from '../../../pages/surveys/ukis/innovations-protected-design.page.js'
  import InnovationsProtectedCopyright from '../../../pages/surveys/ukis/innovations-protected-copyright.page.js'
  import InnovationsProtectedTrademark from '../../../pages/surveys/ukis/innovations-protected-trademark.page.js'
  import InnovationsProtectedLeadTime from '../../../pages/surveys/ukis/innovations-protected-lead-time.page.js'
  import InnovationsProtectedServices from '../../../pages/surveys/ukis/innovations-protected-services.page.js'
  import InnovationsProtectedSecrecy from '../../../pages/surveys/ukis/innovations-protected-secrecy.page.js'
  import CoOperationOnInnovationCompleted from '../../../pages/surveys/ukis/co-operation-on-innovation-completed.page.js'
  import PublicFinancialSupport from '../../../pages/surveys/ukis/public-financial-support.page.js'
  import KindFinancialCentralGovernmentSupport from '../../../pages/surveys/ukis/kind-financial-central-government-support.page.js'
  import PublicFinancialSupportForInnovationCompleted from '../../../pages/surveys/ukis/public-financial-support-for-innovation-completed.page.js'
  import Turnover2014 from '../../../pages/surveys/ukis/turnover-2014.page.js'
  import Turnover2016 from '../../../pages/surveys/ukis/turnover-2016.page.js'
  import Exports2016 from '../../../pages/surveys/ukis/exports-2016.page.js'
  import TurnoverAndExportsCompleted from '../../../pages/surveys/ukis/turnover-and-exports-completed.page.js'
  import Employees2014 from '../../../pages/surveys/ukis/employees-2014.page.js'
  import Employees2016 from '../../../pages/surveys/ukis/employees-2016.page.js'
  import EmployeesQualifications2016 from '../../../pages/surveys/ukis/employees-qualifications-2016.page.js'
  import EmployeesInHouseSkills from '../../../pages/surveys/ukis/employees-in-house-skills.page.js'
  import EmployeesAndSkillsCompleted from '../../../pages/surveys/ukis/employees-and-skills-completed.page.js'
  import AdditionalComments from '../../../pages/surveys/ukis/additional-comments.page.js'
  import HowLong from '../../../pages/surveys/ukis/how-long.page.js'
  import ApproachedTelephone from '../../../pages/surveys/ukis/approached-telephone.page.js'
  import ReadyToSubmitCompleted from '../../../pages/surveys/ukis/ready-to-submit-completed.page.js'
  import Navigation from '../../../pages/surveys/ukis/navigation.page.js'


  describe('UKIS - Should the description be UKIS - Yes to 2.1, 3.1, 3.4, 3.6, 3.9, 3.11, 3.13, 3.15, 4.1, 4.3, 5.1 6.1 skips to interstitial section 6', function() {

    it('Given I have selected Yes to 2.1, When I do not answer 6.13, Then I will be routed to Section 7', function() {
      startQuestionnaire('1_0001.json')
      Navigation.navigateToInnovationActivitiesBusinessStrategyandPractices()
      BusinessChanges.clickBusinessChangesBusinessPracticesAnswerYes()
        .clickBusinessChangesOrganisingAnswerYes()
        .clickBusinessChangesExternalRelationshipsAnswerYes()
        .clickBusinessChangesAnswerYes()
        .submit()
      Navigation.navigateToConstraintsonInnovation()
      ConstraintsInnovationActivities.submit()
      ConstrainingInnovationEconomic.submit()
      ConstrainingInnovationCosts.submit()
      ConstrainingInnovationFinance.submit()
      ConstrainingInnovationAvailableFinance.submit()
      ConstrainingInnovationLackQualified.submit()
      ConstrainingInnovationLackTechnology.submit()
      ConstrainingInnovationLackInformation.submit()
      ConstrainingInnovationDominated.submit()
      ConstrainingInnovationUncertain.submit()
      ConstrainingInnovationGovernment.submit()
      ConstrainingInnovationEu.submit()
      ConstrainingInnovationReferendum.submit()
      ConstraintsOnInnovationCompleted.submit()
      expect(FactorsAffectingIncreasingRange.isOpen()).to.equal(true, 'Expected to navigate to Section 7')
    })

    it('Given I have selected Yes to 3.1, When I am answering question 6.13 , Then I will NOT see question 6.14 and will be routed to section 7', function() {
      startQuestionnaire('1_0001.json')
      Navigation.navigateToInnovationInvestment()
      InternalInvestmentRD.clickInternalInvestmentRDAnswerYes().submit()
      Navigation.navigateToConstraintsonInnovation()
      ConstraintsInnovationActivities.submit()
      ConstrainingInnovationEconomic.submit()
      ConstrainingInnovationCosts.submit()
      ConstrainingInnovationFinance.submit()
      ConstrainingInnovationAvailableFinance.submit()
      ConstrainingInnovationLackQualified.submit()
      ConstrainingInnovationLackTechnology.submit()
      ConstrainingInnovationLackInformation.submit()
      ConstrainingInnovationDominated.submit()
      ConstrainingInnovationUncertain.submit()
      ConstrainingInnovationGovernment.submit()
      ConstrainingInnovationEu.submit()
      ConstrainingInnovationReferendum.submit()
      ConstraintsOnInnovationCompleted.submit()
      expect(FactorsAffectingIncreasingRange.isOpen()).to.equal(true, 'Expected to navigate to Section 7')
    })

    it('Given I have selected Yes to 3.4, When I am answering question 6.13, Then I will NOT see question 6.14 and will be routed to section 7', function() {
      startQuestionnaire('1_0001.json')
      Navigation.navigateToInnovationInvestment()
      InternalInvestmentRD.submit()
      AcquisitionInternalInvestmentRD.clickAcquisitionInternalInvestmentRDAnswerYes().submit()
      Navigation.navigateToConstraintsonInnovation()
      ConstraintsInnovationActivities.submit()
      ConstrainingInnovationEconomic.submit()
      ConstrainingInnovationCosts.submit()
      ConstrainingInnovationFinance.submit()
      ConstrainingInnovationAvailableFinance.submit()
      ConstrainingInnovationLackQualified.submit()
      ConstrainingInnovationLackTechnology.submit()
      ConstrainingInnovationLackInformation.submit()
      ConstrainingInnovationDominated.submit()
      ConstrainingInnovationUncertain.submit()
      ConstrainingInnovationGovernment.submit()
      ConstrainingInnovationEu.submit()
      ConstrainingInnovationReferendum.submit()
      ConstraintsOnInnovationCompleted.submit()
      expect(FactorsAffectingIncreasingRange.isOpen()).to.equal(true, 'Expected to navigate to Section 7')
    })

    it('Given I have selected Yes to 3.6, When I am answering question 6.13, Then I will NOT see question 6.14 and will be routed toto section 7', function() {
      startQuestionnaire('1_0001.json')
      Navigation.navigateToInnovationInvestment()
      InternalInvestmentRD.submit()
      AcquisitionInternalInvestmentRD.submit()
      InvestmentAdvancedMachinery.clickInvestmentAdvancedMachineryAnswerYes().submit()
      Navigation.navigateToConstraintsonInnovation()
      ConstraintsInnovationActivities.submit()
      ConstrainingInnovationEconomic.submit()
      ConstrainingInnovationCosts.submit()
      ConstrainingInnovationFinance.submit()
      ConstrainingInnovationAvailableFinance.submit()
      ConstrainingInnovationLackQualified.submit()
      ConstrainingInnovationLackTechnology.submit()
      ConstrainingInnovationLackInformation.submit()
      ConstrainingInnovationDominated.submit()
      ConstrainingInnovationUncertain.submit()
      ConstrainingInnovationGovernment.submit()
      ConstrainingInnovationEu.submit()
      ConstrainingInnovationReferendum.submit()
      ConstraintsOnInnovationCompleted.submit()
      expect(FactorsAffectingIncreasingRange.isOpen()).to.equal(true, 'Expected to navigate to Section 7')
    })

    it('Given I have selected Yes to 3.9, When I am answering question 6.13, Then I will NOT see question 6.14 and will be routed to section 7', function() {
      startQuestionnaire('1_0001.json')
      Navigation.navigateToInnovationInvestment()
      InternalInvestmentRD.submit()
      AcquisitionInternalInvestmentRD.submit()
      InvestmentAdvancedMachinery.submit()
      InvestmentExistingKnowledgeInnovation.clickInvestmentExistingKnowledgeInnovationAnswerYes().submit()
      Navigation.navigateToConstraintsonInnovation()
      ConstraintsInnovationActivities.submit()
      ConstrainingInnovationEconomic.submit()
      ConstrainingInnovationCosts.submit()
      ConstrainingInnovationFinance.submit()
      ConstrainingInnovationAvailableFinance.submit()
      ConstrainingInnovationLackQualified.submit()
      ConstrainingInnovationLackTechnology.submit()
      ConstrainingInnovationLackInformation.submit()
      ConstrainingInnovationDominated.submit()
      ConstrainingInnovationUncertain.submit()
      ConstrainingInnovationGovernment.submit()
      ConstrainingInnovationEu.submit()
      ConstrainingInnovationReferendum.submit()
      ConstraintsOnInnovationCompleted.submit()
      expect(FactorsAffectingIncreasingRange.isOpen()).to.equal(true, 'Expected to navigate to Section 7')
    })

    it('Given I have selected Yes to 3.11, When I am answering question 6.13 , Then I will NOT see question 6.14 and will be routed to section 7', function() {
      startQuestionnaire('1_0001.json')
      Navigation.navigateToInnovationInvestment()
      InternalInvestmentRD.submit()
      AcquisitionInternalInvestmentRD.submit()
      InvestmentAdvancedMachinery.submit()
      InvestmentExistingKnowledgeInnovation.submit()
      InvestmentTrainingInnovative.clickInvestmentTrainingInnovativeAnswerYes().submit()
      Navigation.navigateToConstraintsonInnovation()
      ConstraintsInnovationActivities.submit()
      ConstrainingInnovationEconomic.submit()
      ConstrainingInnovationCosts.submit()
      ConstrainingInnovationFinance.submit()
      ConstrainingInnovationAvailableFinance.submit()
      ConstrainingInnovationLackQualified.submit()
      ConstrainingInnovationLackTechnology.submit()
      ConstrainingInnovationLackInformation.submit()
      ConstrainingInnovationDominated.submit()
      ConstrainingInnovationUncertain.submit()
      ConstrainingInnovationGovernment.submit()
      ConstrainingInnovationEu.submit()
      ConstrainingInnovationReferendum.submit()
      ConstraintsOnInnovationCompleted.submit()
      expect(FactorsAffectingIncreasingRange.isOpen()).to.equal(true, 'Expected to navigate to Section 7')
    })

    it('Given I have selected Yes to 3.13, When I am answering question 6.13, Then I will NOT see question 6.14 and will be routed to section 7', function() {
      startQuestionnaire('1_0001.json')
      Navigation.navigateToInnovationInvestment()
      InternalInvestmentRD.submit()
      AcquisitionInternalInvestmentRD.submit()
      InvestmentAdvancedMachinery.submit()
      InvestmentExistingKnowledgeInnovation.submit()
      InvestmentTrainingInnovative.submit()
      InvestmentDesignFutureInnovation.clickInvestmentDesignFutureInnovationAnswerYes().submit()
      Navigation.navigateToConstraintsonInnovation()
      ConstraintsInnovationActivities.submit()
      ConstrainingInnovationEconomic.submit()
      ConstrainingInnovationCosts.submit()
      ConstrainingInnovationFinance.submit()
      ConstrainingInnovationAvailableFinance.submit()
      ConstrainingInnovationLackQualified.submit()
      ConstrainingInnovationLackTechnology.submit()
      ConstrainingInnovationLackInformation.submit()
      ConstrainingInnovationDominated.submit()
      ConstrainingInnovationUncertain.submit()
      ConstrainingInnovationGovernment.submit()
      ConstrainingInnovationEu.submit()
      ConstrainingInnovationReferendum.submit()
      ConstraintsOnInnovationCompleted.submit()
      expect(FactorsAffectingIncreasingRange.isOpen()).to.equal(true, 'Expected to navigate to Section 7')
    })

    it('Given I have selected Yes to 3.15, When I am answering question 6.13, Then I will NOT see question 6.14 and will be routed to section 7', function() {
      startQuestionnaire('1_0001.json')
      Navigation.navigateToInnovationInvestment()
      InternalInvestmentRD.submit()
      AcquisitionInternalInvestmentRD.submit()
      InvestmentAdvancedMachinery.submit()
      InvestmentExistingKnowledgeInnovation.submit()
      InvestmentTrainingInnovative.submit()
      InvestmentDesignFutureInnovation.submit()
      InvestmentIntroductionInnovations.clickInvestmentIntroductionInnovationsAnswerYes().submit()
      Navigation.navigateToConstraintsonInnovation()
      ConstraintsInnovationActivities.submit()
      ConstrainingInnovationEconomic.submit()
      ConstrainingInnovationCosts.submit()
      ConstrainingInnovationFinance.submit()
      ConstrainingInnovationAvailableFinance.submit()
      ConstrainingInnovationLackQualified.submit()
      ConstrainingInnovationLackTechnology.submit()
      ConstrainingInnovationLackInformation.submit()
      ConstrainingInnovationDominated.submit()
      ConstrainingInnovationUncertain.submit()
      ConstrainingInnovationGovernment.submit()
      ConstrainingInnovationEu.submit()
      ConstrainingInnovationReferendum.submit()
      ConstraintsOnInnovationCompleted.submit()
      expect(FactorsAffectingIncreasingRange.isOpen()).to.equal(true, 'Expected to navigate to Section 7')
    })

    it('Given I have selected Yes to 4.1, When I am answering question 6.13, Then I will NOT see question 6.14 and will be routed to section 7', function() {
      startQuestionnaire('1_0001.json')
      Navigation.navigateToGoodsandServicesInnovation()
      IntroducingSignificantlyImprovedGoods.clickIntroducingSignificantlyImprovedGoodsAnswerYes().submit()
      Navigation.navigateToConstraintsonInnovation()
      ConstraintsInnovationActivities.submit()
      ConstrainingInnovationEconomic.submit()
      ConstrainingInnovationCosts.submit()
      ConstrainingInnovationFinance.submit()
      ConstrainingInnovationAvailableFinance.submit()
      ConstrainingInnovationLackQualified.submit()
      ConstrainingInnovationLackTechnology.submit()
      ConstrainingInnovationLackInformation.submit()
      ConstrainingInnovationDominated.submit()
      ConstrainingInnovationUncertain.submit()
      ConstrainingInnovationGovernment.submit()
      ConstrainingInnovationEu.submit()
      ConstrainingInnovationReferendum.submit()
      ConstraintsOnInnovationCompleted.submit()
      expect(FactorsAffectingIncreasingRange.isOpen()).to.equal(true, 'Expected to navigate to Section 7')
    })

    it('Given I have selected Yes to 4.3, When I am answering question 6.13, Then I will NOT see question 6.14 and will be routed to section 7', function() {
      startQuestionnaire('1_0001.json')
      Navigation.navigateToGoodsandServicesInnovation()
      IntroducingSignificantlyImprovedGoods.submit()
      IntroduceSignificantlyImprovement.clickIntroduceSignificantlyImprovementAnswerYes().submit()
      Navigation.navigateToConstraintsonInnovation()
      ConstraintsInnovationActivities.submit()
      ConstrainingInnovationEconomic.submit()
      ConstrainingInnovationCosts.submit()
      ConstrainingInnovationFinance.submit()
      ConstrainingInnovationAvailableFinance.submit()
      ConstrainingInnovationLackQualified.submit()
      ConstrainingInnovationLackTechnology.submit()
      ConstrainingInnovationLackInformation.submit()
      ConstrainingInnovationDominated.submit()
      ConstrainingInnovationUncertain.submit()
      ConstrainingInnovationGovernment.submit()
      ConstrainingInnovationEu.submit()
      ConstrainingInnovationReferendum.submit()
      ConstraintsOnInnovationCompleted.submit()
      expect(FactorsAffectingIncreasingRange.isOpen()).to.equal(true, 'Expected to navigate to Section 7')
    })

    it('Given I have selected Yes to 5.1, When I am answering question 6.13, Then I will NOT see question 6.14 and will be routed to section 7', function() {
      startQuestionnaire('1_0001.json')
      Navigation.navigateToProcessInnovation()
      ProcessImproved.clickProcessImprovedAnswerYes().submit()
      Navigation.navigateToConstraintsonInnovation()
      ConstraintsInnovationActivities.submit()
      ConstrainingInnovationEconomic.submit()
      ConstrainingInnovationCosts.submit()
      ConstrainingInnovationFinance.submit()
      ConstrainingInnovationAvailableFinance.submit()
      ConstrainingInnovationLackQualified.submit()
      ConstrainingInnovationLackTechnology.submit()
      ConstrainingInnovationLackInformation.submit()
      ConstrainingInnovationDominated.submit()
      ConstrainingInnovationUncertain.submit()
      ConstrainingInnovationGovernment.submit()
      ConstrainingInnovationEu.submit()
      ConstrainingInnovationReferendum.submit()
      ConstraintsOnInnovationCompleted.submit()
      expect(FactorsAffectingIncreasingRange.isOpen()).to.equal(true, 'Expected to navigate to Section 7')
    })

    it('Given I have selected Yes to 6.1, When I am answering question 6.13, Then I will NOT see question 6.14 and will be routed to section 7', function() {
      startQuestionnaire('1_0001.json')
      Navigation.navigateToConstraintsonInnovation()
      ConstraintsInnovationActivities.clickConstraintsInnovationActivitiesAbandonedAnswserYes()
        .clickConstraintsInnovationActivitiesScaledBackAnswserYes()
        .clickConstraintsInnovationActivitiesOngoing2016AnswserYes()
        .submit()
      ConstrainingInnovationEconomic.submit()
      ConstrainingInnovationCosts.submit()
      ConstrainingInnovationFinance.submit()
      ConstrainingInnovationAvailableFinance.submit()
      ConstrainingInnovationLackQualified.submit()
      ConstrainingInnovationLackTechnology.submit()
      ConstrainingInnovationLackInformation.submit()
      ConstrainingInnovationDominated.submit()
      ConstrainingInnovationUncertain.submit()
      ConstrainingInnovationGovernment.submit()
      ConstrainingInnovationEu.submit()
      ConstrainingInnovationReferendum.submit()
      ConstraintsOnInnovationCompleted.submit()
      expect(FactorsAffectingIncreasingRange.isOpen()).to.equal(true, 'Expected to navigate to Section 7')
    })

    it('Given I have a combination of NO and not selected answers to questions 2.1, 3.1, 3.4, 3.6, 3.9, 3.11, 3.13, 3.15, 4.1, 4.3, 5.1 6.1, When I am answering question 6.13, Then I WILL see question 6.14 and then be routed to section 10', function() {
      startQuestionnaire('1_0001.json')
      Navigation.navigateToInnovationActivitiesBusinessStrategyandPractices()
      BusinessChanges.clickBusinessChangesBusinessPracticesAnswerNo()
        .clickBusinessChangesOrganisingAnswerNo()
        .clickBusinessChangesExternalRelationshipsAnswerNo()
        .clickBusinessChangesAnswerNo()
        .submit()
      Navigation.navigateToConstraintsonInnovation()
      ConstraintsInnovationActivities.submit()
      ConstrainingInnovationEconomic.submit()
      ConstrainingInnovationCosts.submit()
      ConstrainingInnovationFinance.submit()
      ConstrainingInnovationAvailableFinance.submit()
      ConstrainingInnovationLackQualified.submit()
      ConstrainingInnovationLackTechnology.submit()
      ConstrainingInnovationLackInformation.submit()
      ConstrainingInnovationDominated.submit()
      ConstrainingInnovationUncertain.submit()
      ConstrainingInnovationGovernment.submit()
      ConstrainingInnovationEu.submit()
      ConstrainingInnovationReferendum.submit()
      ConstrainingInnovationNotNecessary.submit()
      ConstraintsOnInnovationCompleted.submit()
      expect(PublicFinancialSupport.isOpen()).to.equal(true, 'Expected to Navigate to question 10.1')
    })

    it('Given I have not selected answers to questions 2.1, 3.1, 3.4, 3.6, 3.9, 3.11, 3.13, 3.15, 4.1, 4.3, 5.1 6.1, When I am answering question 6.13, Then I WILL see question 6.14 and then be routed to section 10', function() {
      startQuestionnaire('1_0001.json')
      Navigation.navigateToInnovationActivitiesBusinessStrategyandPractices()
      BusinessChanges.submit()
      Navigation.navigateToConstraintsonInnovation()
      ConstraintsInnovationActivities.submit()
      ConstrainingInnovationEconomic.submit()
      ConstrainingInnovationCosts.submit()
      ConstrainingInnovationFinance.submit()
      ConstrainingInnovationAvailableFinance.submit()
      ConstrainingInnovationLackQualified.submit()
      ConstrainingInnovationLackTechnology.submit()
      ConstrainingInnovationLackInformation.submit()
      ConstrainingInnovationDominated.submit()
      ConstrainingInnovationUncertain.submit()
      ConstrainingInnovationGovernment.submit()
      ConstrainingInnovationEu.submit()
      ConstrainingInnovationReferendum.submit()
      ConstrainingInnovationNotNecessary.submit()
      ConstraintsOnInnovationCompleted.submit()
      expect(PublicFinancialSupport.isOpen()).to.equal(true, 'Expected to Navigate to question 10.1')
    })
  })
