/**
 * Created by admin on 2017/11/13.
 */
//var index = getSession('page').index
new Vue({
  el: '#app',
  data: {
    defaultactive: '',
    rePasswrod:123456,
    isload: false,
    dialogVisible: false,
    total:100,
    form: {
      name: '',
      account: '',
      time: ''
    },
    tableData: [{
      userName: '王小虎',
      email: '123445333@qq.com',
      date: '2010-03-04',
      state: '启用'
    },
      {
        userName: '王小虎',
        email: '123445333@qq.com',
        date: '2010-03-04',
        state: '启用'
      },
      {
        userName: '王小虎',
        email: '123445333@qq.com',
        date: '2010-03-04',
        state: '启用'
      },
      {
        userName: '王小虎',
        email: '123445333@qq.com',
        date: '2010-03-04',
        state: '启用'
      },
      {
        userName: '王小虎',
        email: '123445333@qq.com',
        date: '2010-03-04',
        state: '启用'
      }
    ],
    currentPage:3
  },
  methods: {
    pageJumps(ser) {
      //console.log('pageJumps')
      compageJumps(ser)
    },
    handleClick(row) {
      console.log(row);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    resetPassword() {
      this.dialogVisible = true
    }
  },
  created() {

  },
  mounted:function() {
    this.isload = true
  }
})

