/**
 * Created by wyg on 2017/10/2.
 */
let ApiHost = 'http://172.16.17.125:8080'
let Api = 'http://172.16.17.125:8081'
import {axiosGet,axiosGetToken,axiosPost,axiosPostToken,axiosDeleteToken,axiosDelete} from './baseApi'
//根据事项id 获取事项接口
export const getErrandList = (params,config)=>axiosGet(`/approveinterface/v1/approveinfo${reqParms(params)}`,'',config);

//获取办件 详情  根据事项id获取事项基本信息
export const getErrandDetails = (approveId,config)=>axiosGet(`/approveinterface/v1/approveinfo/${approveId}`,null,config);

//根据Id查询事项名称
export const getApproveName = (approveId,config)=>axiosGetToken(`/approveinterface/v1/approveAdvanced/getById/${approveId}`,config);

//获取事项 材料列表
export const getMaterialList = (params,config)=>axiosGet(`/approveinterface/v1/approveMaterial${reqParms(params)}`,'',config);

//附件上传接口
export const uploadFile = (params,config)=>axiosPost('/minio/apk/attach/upload',params,config);


//新建申请人
export const addApplicant = (params,config)=>axiosPostToken(`${ApiHost}/accept/v1/applicant`,params,config);

//办件暂存 新增
export const addErrandExample = (params,config) =>
  axiosPostToken(`${ApiHost}/accept/v1/instance/saveOuterInstance/allinfo`,params,config);

//获取办件实例
export const getErrandInstance = (instanceId,config) =>
  axiosGetToken(`/accept/v1/instance/${instanceId}`,null,config);

//更新办件实例
export const updataErrandInstance = (instanceId,params,config)=>
  axiosPostToken(`/accept/v1/instance/${instanceId}`,params,config);

// 删除办件实例
export const deleteErrandInstance = (instanceId,config)=>
  axiosDeleteToken(`/accept/v1/instance/${instanceId}`,config);

// 获取材料列表id
export const getApprovematerial = (approveId,config) =>
  axiosGet(`/approveinterface/v1/approvematerial/selectByApproveId/${approveId}`,null,config);


//根据部门查询机构列表
export const getOrgsList = (orgId,params,config) => axiosGet(`/uop/v1/orgs/${orgId}/children`,params,config);

//获取办件实例列表
export const getProceedingList = (params,config) => axiosGet(`/accept/v1/instance/getListByStatusAndApply${reqParms(params)}
`,config);

//删除办件实例
export const deleteProceeding = (instanceId,config) => axiosDelete(`${ApiHost}/accept/v1/instance/${instanceId}`,config);

//根据事项信息获取事项基本信息
export const getApproveinterface = (approveId,config) => axiosGet(`/approveinterface/v1/approveinfo/${approveId}`,config);

//获取事项扩展信息
export const getApproveinterfaceExtend = (approveId,config) => axiosGet(`/approveinterface/v1/approveAdvancedByApplyId/${approveId}`,config);

/*根据ID查询申请人*/
export const getApplyInfo = (applicantId,config) => axiosGet(`${ApiHost}/accept/v1/applicant/${applicantId}`,config);

/*根据ID查询申请单位*/
export const getApplyBankInfo = (applycorpId,config) => axiosGet(`/accept/v1/applycorp/${applycorpId}`,config);

//根据办件实例ID查所有材料实例信息
export const findByInstanceId = (instanceId,config) => axiosGet(`${ApiHost}/accept/v1/instancematerial/findByInstanceId/${instanceId}`,config);

//根据材料实例ID查所有附件信息
export const findListByBusinessId = (materialInsId,config) => axiosGet(`${ApiHost}/accept/v1/attach/findListByBusinessId/${materialInsId}`,config);

//根据附件ID删除附件
export const deleteListByBusinessId = (attachId,config) => axiosDelete(`${ApiHost}/accept/v1/attach/${attachId}`,config)

//根据材料实例ID修改材料提交状态
export const changeSubmitState = (materialInsId,params,config) => axiosPost(`${ApiHost}/accept/v1/instancematerial/${materialInsId}`,params,config)

//插入附件实例记录
export const addAttach= (params,config) => axiosPost(`${ApiHost}/accept/v1/attach`,params,config)

//更新办件状态
export const updateInstanceStateById= (instanceId,params,config) => axiosPost(`${ApiHost}/accept/v1/instance/${instanceId}`,params,config)

//根据办件实例id获取办件的详细过程
export const getDetailProcessinfo = (instanceId,config) => axiosGet(`/accept/v1/detailProcess/getByInstanceId/${instanceId}
`,config);

//根据申请者信息获取各项目状态下的办件数量
export const getCountProjectStatus
  = (certificateNum,config) => axiosGet(`/accept/v1/instance/countProjectStatusByApply?certificateNum=${certificateNum}`,config)

//自定义表单字段实例
export const getFormInstance = (instanceId,config) => axiosGet(`${Api}/accept/v1/dform/forminstance/findListByInstanceId/${instanceId}`,config)

//跳转后台页面绘制表单
export const drawForm = (approveId,instanceId,formData=[],redirect_uri) => `${Api}/jsp/accept/customform.jsp?approveId=${approveId}&instanceId=${instanceId}&type=wx&formData=${formData}&redirect_uri=${redirect_uri}`
//新增自定义表单字段实例
export const addInstanceForms = (params,config) => axiosPost(`${Api}/accept/v1/dform/instanceforms `,params,config)
//更新自定义表单字段实例
export const updateFormData = (instanceId,params,config) =>axiosPost(`${Api}/accept/v1/dform/instanceforms/${instanceId}`,params,config)

//参数处理函数
const reqParms = (params)=>{
  let qs = '?';
  for(let index in params){
    qs += `${index}=${params[index]}&`
  }
  return qs;
};
