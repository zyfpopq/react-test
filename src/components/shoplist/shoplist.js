import React,{Component} from 'react'
import {ListView,WingBlank,ActivityIndicator} from 'antd-mobile'

const shopin=[
    {
        img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
        name: 'Meet hotel',
        des: '￥20起送/配送费约￥5',
    },
    {
        img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
        name: 'McDonald\'s invites you',
        des: '￥10起送/配送费约￥5',
    },
    {
        img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
        name: 'Eat the week',
        des: '￥30起送/配送费约￥5',
    },
]

//每次添加几条页面信息
const NUM_ROWS = 10
//定义添加页面次数
let pageindex = 0
//获取dataBlob对象信息,用于表示每条添加的信息
function genData(pIndex = 0) {
    const dataBlob = {}
    for (let i=0;i<NUM_ROWS;i++){
        const ii = (pIndex * NUM_ROWS) + i
        dataBlob[`${ii}`] = `row-${ii}`
    }
    return dataBlob
}
export default class ShopList extends Component{
    constructor(props){
        super(props)
        //rowHasChanged定义是否刷新rows的内部信息
        const dataSource = new ListView.DataSource({
            rowHasChanged: (row1,row2)=> row1 !== row2
        });

        this.state={
            dataSource,
            isLoading:true
        };
    }

    componentDidMount(){
        //刷新页面获取初始信息
        setTimeout(
            ()=>{
                this.rData=genData();
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(this.rData),
                    isLoading:false
                });
            },600);
    }
    //当所有的数据都已经渲染过，并且列表被滚动到距离最底部不足onEndReachedThreshold个像素的距离时调用
    onEndReached = (event) =>{
        //表示如果isloading为false或者能渲染的数据已经全部渲染结束则返回
        if (this.state.isLoading&&!this.state.hasMore) {
            return
        }
        console.log('reach end',event);
        this.setState({isLoading:true});
        setTimeout(
            () => {
                this.rData={...this.rData,...genData(++pageindex)};
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(this.rData),
                    isLoading: false});
            },1000)
    }
    render(){
        const separator = (sectionID, rowID) => (
            <div
                key={`${sectionID}-${rowID}`}
                style={{
                    backgroundColor: '#F5F5F9',
                    height: 8,
                    borderTop: '1px solid #ECECED',
                    borderBottom: '1px solid #ECECED',
                }}
            />
        );
        let index = shopin.length - 1;
        const row = (rowData,sectionID,rowID)=>{
            if (index<0){
                index = shopin.length - 1;
            }
            const obj = shopin[index--];
            return (
                <div key={rowID} style={{padding:'0 5px'}}>
                    <div style={{display:'flex',padding:'5px 0'}}>
                        <img style={{marginRight:'15px',height:'72px'}} src={obj.img} alt=''/>
                        <div style={{lineHeight:'1',float:'right',width:'77%'}}>
                            <div style={{width:'100%',display:'block'}}>
                                <span style={{fontWeight: 'bold'}}>{obj.name}</span>
                                <span style={{fontSize:'10px',padding:'0 2px',border:'1px solid #f1f1f1',color:'#999',float:'right'}}>保</span>
                            </div>
                            <div style={{marginTop:'13px',marginBottom: '13px',display:'block'}}>
                                <span>
                                    <img style={{width:'12px'}} src={require(`./images/star24_on@2x.png`)} alt=""/>
                                    <img style={{width:'12px'}} src={require(`./images/star24_on@2x.png`)} alt=""/>
                                    <img style={{width:'12px'}} src={require(`./images/star24_on@2x.png`)} alt=""/>
                                    <img style={{width:'12px'}} src={require(`./images/star24_on@2x.png`)} alt=""/>
                                    <img style={{width:'12px'}} src={require(`./images/star24_half@2x.png`)} alt=""/>
                                </span>
                                <span style={{fontSize:'10px',color:'#FF6E27'}}>4.7</span>
                                <span style={{fontSize:'8px',color:'#666'}}>月售478单</span>
                                <span style={{color:'#02a774',border:'1px solid #02a774',fontSize:'3px',float:'right'}}>E专送</span>
                            </div>
                            <div style={{marginTop:'10px',marginBottom: '5px',fontSize:'8px',display:'block',color:'#666'}}>
                                {obj.des}
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        return(
            <div>
                <WingBlank size="sm">
                    <ListView
                        ref={el => this.lv = el}
                        dataSource={this.state.dataSource}
                        renderHeader={() => <span>header</span>}
                        renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
                            {this.state.isLoading ?
                                <ActivityIndicator
                                    toast
                                    text="Loading..."
                                    animating={this.state.isLoading}/> : '浏览完了'}
                        </div>)}
                        renderRow={row}
                        renderSeparator={separator}
                        className="am-list"
                        pageSize={2}
                        useBodyScroll
                        onScroll={() => { console.log('scroll'); }}
                        scrollRenderAheadDistance={500}
                        onEndReached={this.onEndReached}
                        onEndReachedThreshold={10}
                    />
                </WingBlank>

            </div>
        )
    }
}
