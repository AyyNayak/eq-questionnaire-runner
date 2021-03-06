import PrimaryPersonListCollectorPage from "../generated_pages/relationships_primary/primary-person-list-collector.page.js";
import PrimaryPersonListCollectorAddPage from "../generated_pages/relationships_primary/primary-person-list-collector-add.page.js";
import ListCollectorPage from "../generated_pages/relationships_primary/list-collector.page.js";
import ListCollectorAddPage from "../generated_pages/relationships_primary/list-collector-add.page.js";
import RelationshipsPage from "../generated_pages/relationships_primary/relationships.page.js";

describe("Relationships - Primary Person", () => {
  const schema = "test_relationships_primary.json";

  describe("Given I am completing the test_relationships_primary survey", () => {
    beforeEach(() => {
      browser.openQuestionnaire(schema);
    });

    it("When I add household members, Then I will be asked my relationships as a primary person", () => {
      addPrimaryAndTwoOthers();

      $(ListCollectorPage.no()).click();
      $(ListCollectorPage.submit()).click();
      expect($(RelationshipsPage.questionText()).getText()).to.contain("is your");
    });

    it("When I add household members, Then non-primary relationships will be asked as a non primary person", () => {
      addPrimaryAndTwoOthers();

      $(ListCollectorPage.no()).click();
      $(ListCollectorPage.submit()).click();
      $(RelationshipsPage.relationshipBrotherOrSister()).click();
      $(RelationshipsPage.submit()).click();
      $(RelationshipsPage.relationshipSonOrDaughter()).click();
      $(RelationshipsPage.submit()).click();
      expect($(RelationshipsPage.questionText()).getText()).to.contain("is their");
    });

    it("When I add household members And add thir relationships And remove the primary person And add a new primary person then I will be asked for the relationships again", () => {
      addPrimaryAndTwoOthersAndCompleteRelationships();

      browser.url("/questionnaire/primary-person-list-collector");

      $(PrimaryPersonListCollectorPage.no()).click();
      $(PrimaryPersonListCollectorPage.submit()).click();

      browser.url("/questionnaire/primary-person-list-collector");

      $(PrimaryPersonListCollectorPage.yes()).click();
      $(PrimaryPersonListCollectorPage.submit()).click();
      $(PrimaryPersonListCollectorAddPage.firstName()).setValue("Marcus");
      $(PrimaryPersonListCollectorAddPage.lastName()).setValue("Twin");
      $(PrimaryPersonListCollectorAddPage.submit()).click();
      $(ListCollectorPage.no()).click();
      $(ListCollectorPage.submit()).click();

      expect($(RelationshipsPage.questionText()).getText()).to.contain("Samuel Clemens is your");
    });

    function addPrimaryAndTwoOthersAndCompleteRelationships() {
      addPrimaryAndTwoOthers();

      $(ListCollectorPage.no()).click();
      $(ListCollectorPage.submit()).click();
      $(RelationshipsPage.relationshipBrotherOrSister()).click();
      $(RelationshipsPage.submit()).click();
      $(RelationshipsPage.relationshipSonOrDaughter()).click();
      $(RelationshipsPage.submit()).click();
      $(RelationshipsPage.relationshipBrotherOrSister()).click();
    }

    function addPrimaryAndTwoOthers() {
      $(PrimaryPersonListCollectorPage.yes()).click();
      $(PrimaryPersonListCollectorPage.submit()).click();
      $(PrimaryPersonListCollectorAddPage.firstName()).setValue("Marcus");
      $(PrimaryPersonListCollectorAddPage.lastName()).setValue("Twin");
      $(PrimaryPersonListCollectorAddPage.submit()).click();
      $(ListCollectorPage.yes()).click();
      $(ListCollectorPage.submit()).click();
      $(ListCollectorAddPage.firstName()).setValue("Samuel");
      $(ListCollectorAddPage.lastName()).setValue("Clemens");
      $(ListCollectorAddPage.submit()).click();
      $(ListCollectorPage.yes()).click();
      $(ListCollectorPage.submit()).click();
      $(ListCollectorAddPage.firstName()).setValue("Olivia");
      $(ListCollectorAddPage.lastName()).setValue("Clemens");
      $(ListCollectorAddPage.submit()).click();
    }
  });
});
