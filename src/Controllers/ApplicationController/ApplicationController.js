import ApplicationService from "../../Services/ApplicationService/ApplicationService.js";
const ApplicationController = {
  getApplications: async (req, res) => {
    try {
      const application = await ApplicationService.getApplications(req);
      if (!application) {
        return res.status(400).json({ message: "You have not applied yet" });
      }
      return res.status(200).json(application);
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },

  apply: async (req, res) => {
    try {
      const apply = await ApplicationService.apply(req, req.body);
      if (apply.error) {
        return res.status(404).json({ message: result.error });
      }
      return res.status(201).json({ message: "Applied Successfully" });
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },
};

export default ApplicationController;
