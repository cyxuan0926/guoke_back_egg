'use strict';
const Controller = require('egg').Controller;
const createRule = {
  solutionId: 'string',
};

class SolutionDetailController extends Controller {
  /**
 * @api {get} /solution-detail 分页查询解决方案详情
 * @apiName solutionDetail
 * @apiGroup SolutionDetail
 *
 * @apiParam {Int} page 起始页
 * @apiParam {Int} rows 每页条数
 *
 * @apiSuccess {ObjectId} _id 解决方案详情id
 * @apiSuccess {String} introduction 软件介绍
 * @apiSuccess {String} constitute 组成部分和应用领域
 * @apiSuccess {String} technology 技术特点
 * @apiSuccess {String} solutionId 对应的解决方案
 * @apiSuccess {Date} createdAt 解决方案创建时间
 * @apiSuccess {Date} updatedAt 解决方案修改时间
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       code: 200,
 *       msg: '查询解决方案详情成功',
 *       data: {
 *          solutionDetail: [{
 *          "_id": "5aec94a8d3f49a2fc4ec8944",
 *          "solutionId": "5aeb3710c4628132ec43b4f6",
 *          "sysFlag": 1,
 *          "updatedAt": "2018-05-04T17:13:12.756Z",
 *          "createdAt": "2018-05-04T17:13:12.756Z",
 *          "technology": "springboot&vue.js",
 *          "constitute": "罪犯数据信息",
 *          "introduction": "罪犯数据库"
 *          }],
 *          total: 1
 *       }
 *     }
 *
 * @apiError 500 查询解决方案详情失败
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       code: 500,
 *       msg: '查询解决方案详情失败'
 *     }
 */
  async index() {
    const { ctx, service } = this;
    const solutionDetail = await service.solutionDetail.index(ctx.query);
    if (solutionDetail) ctx.success(solutionDetail, '查询解决方案详情成功'); else ctx.fail('查询解决方案详情失败');
  }

  /**
 * @api {post} /solution-detail 新增解决方案详情
 * @apiName solution-detail/new
 * @apiGroup SolutionDetail
 *
 * @apiParam {String} introduction 软件介绍
 * @apiParam {String} constitute 组成部分和应用领域
 * @apiParam {String} technology 技术特点
 * @apiParam {String} solutionId 解决方案id required
 *
 * @apiSuccess {ObjectId} _id 解决方案详情id
 * @apiSuccess {String} introduction 软件介绍
 * @apiSuccess {String} constitute 组成部分和应用领域
 * @apiSuccess {String} technology 技术特点
 * @apiSuccess {Object} solutionId 对应的解决方案
 * @apiSuccess {Date} createdAt 解决方案创建时间
 * @apiSuccess {Date} updatedAt 解决方案修改时间
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       code: 200,
 *       msg: '新增解决方案详情成功',
 *       data: {
 *          "_id": "5aec94a8d3f49a2fc4ec8944",
 *          "solutionId": "5aeb3710c4628132ec43b4f6",
 *          "sysFlag": 1,
 *          "updatedAt": "2018-05-04T17:13:12.756Z",
 *          "createdAt": "2018-05-04T17:13:12.756Z",
 *          "technology": "springboot&vue.js",
 *          "constitute": "罪犯数据信息",
 *          "introduction": "罪犯数据库"
 *       }
 *     }
 *
 * @apiError 500 新增解决方案详情失败
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       code: 500,
 *       msg: '新增解决方案详情失败'
 *     }
 **/
  async create() {
    const { ctx, service } = this;
    ctx.validate(createRule);
    const solutionDetail = await service.solutionDetail.create(ctx.request.body);
    if (solutionDetail) ctx.success(solutionDetail, '新增解决方案详情成功'); else ctx.fail('新增解决方案详情失败');
  }

  async update() {
    const { ctx, service } = this;
    ctx.validate(createRule);
    const result = await service.solutionDetail.update(ctx.request.body);
    if (result) ctx.success(result, '修改解决方案详情成功'); else ctx.fail('修改解决方案详情失败');
  }

  async delete() {
    const { ctx, service } = this;
    const result = await service.solutionDetail.delete(ctx.params.id);
    if (result) ctx.success(result, '删除解决方案详情成功'); else ctx.fail('删除解决方案详情失败');
  }

  /**
 * @api {get} /solution-detail/:id/edit 根据解决方案id查询解决方案详情
 * @apiName solutionDetail/edit
 * @apiGroup SolutionDetail
 *
 * @apiSuccess {ObjectId} _id 解决方案详情id
 * @apiSuccess {String} introduction 软件介绍
 * @apiSuccess {String} constitute 组成部分和应用领域
 * @apiSuccess {String} technology 技术特点
 * @apiSuccess {String} solutionId 对应的解决方案
 * @apiSuccess {Date} createdAt 解决方案创建时间
 * @apiSuccess {Date} updatedAt 解决方案修改时间
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       code: 200,
 *       msg: '查询解决方案详情成功',
 *       data: {
 *          "_id": "5aec94a8d3f49a2fc4ec8944",
 *          "solutionId": "5aeb3710c4628132ec43b4f6",
 *          "sysFlag": 1,
 *          "updatedAt": "2018-05-04T17:13:12.756Z",
 *          "createdAt": "2018-05-04T17:13:12.756Z",
 *          "technology": "springboot&vue.js",
 *          "constitute": "罪犯数据信息",
 *          "introduction": "罪犯数据库"
 *       }
 *     }
 *
 * @apiError 500 查询解决方案详情失败
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       code: 500,
 *       msg: '查询解决方案详情失败'
 *     }
 */
  async edit() {
    const { ctx, service } = this;
    const solutionDetail = await service.solutionDetail.edit(ctx.params.id);
    if (solutionDetail) ctx.success(solutionDetail, '查询解决方案详情成功'); else ctx.fail('查询解决方案详情失败');
  }
}

module.exports = SolutionDetailController;