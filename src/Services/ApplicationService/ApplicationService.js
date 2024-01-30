import ApplicationModel from "../../Model/ApplicationModel/ApplicationModel.js";
import JobModel from "../../Model/JobModel/JobModel.js";
import UserModel from "../../Model/UserModel/UserModel.js";
const ApplicationService = {
  getApplications: async (req) => {
    const userId = req.session.user.id;
    const application = await ApplicationModel.findAll({
      where: {
        id: userId,
      },
      include: [
        {
          model: JobModel,
          attributes: ["title"],
        },
      ],
    });
    return application;
  },
  apply: async (req, data) => {
    const userId = req.session.user.id;

    const { jobId, cv } = data;
    const apply = await ApplicationModel.create({
      userId,
      jobId,
      cv,
    });
    return apply;
  },
};
export default ApplicationService;
