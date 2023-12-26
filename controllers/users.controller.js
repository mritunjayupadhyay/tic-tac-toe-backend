import {asyncHandler} from "../utils/asyncHandler.utils.js";

const getUser = asyncHandler(async (req, res) => {
  
    const {  username = 'No user name is given' } = req.query;
  
      return res
        .status(200)
        .json(
          { error: false, data: username },
        );
    });

export { getUser }