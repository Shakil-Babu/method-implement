String.prototype._charAt = function(index){
    let arr = this.split('');
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        if(i === index){
            return item ;
        }
    }
  }