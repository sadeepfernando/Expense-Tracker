import _ from 'lodash';



export function getSum(transaction , type){
    let sum = _(transaction).groupBy('type')
                .map((objs, keys) =>{
                   if(!type) return _.sumBy(objs ,'amount');

                   return {
                    type : keys,
                    color: objs[0].color,
                    total: _.sumBy(objs, 'amount')
                   }
                })
                .value();
   
    return sum;
}

export function getLabels(transaction){
    let amountSum = getSum(transaction, 'type');

    let Total = _.sum(getSum(transaction));

    let percent = _(amountSum)
                    .map(objs =>
                        _.assign(objs,{percent :(100 * objs.total)/Total })
                    )
                    .value()
    
      return percent;
}

export function chartData(transaction){
    let bg = _.map(transaction, a=> a.color);
    bg = _.uniq(bg)

    let dataSet = getSum(transaction);


    const config = {
        data : {
          datasets: [{
            data: dataSet,
            backgroundColor: bg,
            hoverOffset: 4,
            borderRadius : 20,
            spacing : 5
          }]
        },
        options :{
          cutout :120
        }
      }
      return config;
}

export function getTotal(transaction){
    return _.sum(getSum(transaction));
}