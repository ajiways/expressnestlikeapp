import { HttpCode } from "../../../misc/http-codes.js";
import { BaseController } from "../../../common/base-controller.js";

export class UserController extends BaseController {
  constructor(userService) {
    super();
    this.userService = userService;
  }

  createUser = async (req, res) => {
    if (this.checkValidation(req, res)) return;

    const { name, email } = req.body;

    try {
      const response = await this.userService.createUser(name, email);

      this.sendResponse(req, res, HttpCode.CREATED, { user: response });
    } catch (err) {
      this.handleError(err, req, res);
    }
  };
}
