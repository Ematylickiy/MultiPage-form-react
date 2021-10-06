import StartPage from '../Components/StartPage'
import { shallow} from "enzyme";

describe("StartPage", () => {
    it("should have h1 and tag with Guide", () => {
      const wrapper = shallow(<StartPage />);
      expect(wrapper.find("h1").text()).toBe("Application for Schengen Visa");
    });
});
