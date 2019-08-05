new Vue({
	el: '#container',
	data() {
      return {
        tabPosition: 'left',
        tabIndex: 1,
        editableTabsValue: '1',
        editableTabs: [{
          title: '商户列表',
          name: '1',
          content: '商户列表'
        }],
        labelPosition: 'right',
        productCodes:[
        	{value:'',label:'不限'},
        	{value:'1',label:'快乐pay不+3'},
        ],
        rateTypes:[
        	{value:'',label:'不限'},
        	{value:'1',label:'低费率'},
        	{value:'2',label:'高费率'},
        ],
        searchForm:[],
        tableData:[
        	{realName:'测试商户74103',coding:'470065595738820',deviceNum:'5700000011',phone:'188****0885',frontCode:'V2638575',rateType:'低费率',productCode:'快乐pay不+3',createDt:'2019-07-26 11:39:37',updatedDt:'2019-07-27 00:00:00'},
        	{realName:'测试商户74103',coding:'470065595738820',deviceNum:'5700000011',phone:'188****0885',frontCode:'V2638575',rateType:'低费率',productCode:'快乐pay不+3',createDt:'2019-07-26 11:39:37',updatedDt:'2019-07-27 00:00:00'},
        	{realName:'测试商户74103',coding:'470065595738820',deviceNum:'5700000011',phone:'188****0885',frontCode:'V2638575',rateType:'低费率',productCode:'快乐pay不+3',createDt:'2019-07-26 11:39:37',updatedDt:'2019-07-27 00:00:00'},
        	{realName:'测试商户74103',coding:'470065595738820',deviceNum:'5700000011',phone:'188****0885',frontCode:'V2638575',rateType:'低费率',productCode:'快乐pay不+3',createDt:'2019-07-26 11:39:37',updatedDt:'2019-07-27 00:00:00'},
        	{realName:'测试商户74103',coding:'470065595738820',deviceNum:'5700000011',phone:'188****0885',frontCode:'V2638575',rateType:'低费率',productCode:'快乐pay不+3',createDt:'2019-07-26 11:39:37',updatedDt:'2019-07-27 00:00:00'},
        	{realName:'测试商户74103',coding:'470065595738820',deviceNum:'5700000011',phone:'188****0885',frontCode:'V2638575',rateType:'低费率',productCode:'快乐pay不+3',createDt:'2019-07-26 11:39:37',updatedDt:'2019-07-27 00:00:00'}
        ],
        tradeRecordTableData:[
        	{realName:'林秀',frontCode:'V2638575',coding:'412449624264109',sn:'5700000015',orderNo:'2019072614160829312133608',ordertCrash:'15800',productCode:'快乐pay不+3',orderDt:'2019-07-25 15:00:00',orderType:'押金'},
        	{realName:'林秀',frontCode:'V2638575',coding:'412449624264109',sn:'5700000015',orderNo:'2019072614160829312133608',ordertCrash:'15800',productCode:'快乐pay不+3',orderDt:'2019-07-25 15:00:00',orderType:'押金'},
        	{realName:'林秀',frontCode:'V2638575',coding:'412449624264109',sn:'5700000015',orderNo:'2019072614160829312133608',ordertCrash:'15800',productCode:'快乐pay不+3',orderDt:'2019-07-25 15:00:00',orderType:'押金'},
        	{realName:'林秀',frontCode:'V2638575',coding:'412449624264109',sn:'5700000015',orderNo:'2019072614160829312133608',ordertCrash:'15800',productCode:'快乐pay不+3',orderDt:'2019-07-25 15:00:00',orderType:'押金'},
        	{realName:'林秀',frontCode:'V2638575',coding:'412449624264109',sn:'5700000015',orderNo:'2019072614160829312133608',ordertCrash:'15800',productCode:'快乐pay不+3',orderDt:'2019-07-25 15:00:00',orderType:'押金'}
        ],

        currentPage:1,
        createMerchantDialog:false,
        createTradeDialog:false,
        tradeRecordDialog:false,
        merchantForm: {
          frontCode: '',
          productCode:'',
          rateType:'',
          time:'',
          idCard:'',
          num:'1'
        },
		tradeFormList:[
			{
			  coding: '',
			  sn:'',
			  tradingType:'',
			  cardType:'',
			  ordertCrash:'',
			  time:'',
			  num:'1',
			}
		],
        tradeFormItem:{
		  coding: '',
		  sn:'',
		  tradingType:'',
		  cardType:'',
		  ordertCrash:'',
		  time:'',
		  num:'1',
		} ,
        tradeRecordForm:{
        	coding:'',
        	orderNo:'',
        	productCode:'',
        	sn:''
        },
        formLabelWidth: '120px',
        pickerOptions: {
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },

      };
    },

    methods: {
        searchBtn(e){
            console.log(111,e)
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        },
        handleClick(){
            this.createTradeDialog = true ;
        },
        del(index){
            this.tradeFormList.splice(index,1) 
        },
        add(){
            this.tradeFormList.push(this.tradeFormItem)
        }
    }
})
