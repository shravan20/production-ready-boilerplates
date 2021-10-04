const httpStatus = require('http-status');

const HTTP_STATUS = {
 "SUCCESS": httpStatus.SUCCESS,
 "CREATED": httpStatus.CREATED,
 "ACCEPTED": httpStatus.ACCEPTED,
 "NO_CONTENT": httpStatus.NO_CONTENT,
 "BAD_REQUEST": httpStatus.BAD_REQUEST,
 "UNAUTHORIZED": httpStatus.UNAUTHORIZED,
 "FORBIDDEN": httpStatus.FORBIDDEN,
 "NOT_FOUND": httpStatus.NOT_FOUND,
 "CONFLICT": httpStatus.CONFLICT,
 "INTERNAL_SERVER_ERROR": httpStatus.INTERNAL_SERVER_ERROR
};




module.export = {
    HTTP_STATUS
};