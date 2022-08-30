const salaryOperations = {
   
    basicSalary:0,

    hra(){
      return 0.50 * this.basicSalary;
    },
    da(){
      return 0.20 * this.basicSalary;
    },
    ta(){
      return 0.30 * this.basicSalary;
    },
    pf(){
        return 0.05 * this.basicSalary;
    },
    ma(){
        return 0.40 * this.basicSalary;
    },
    gs(){
        return this.hra(this.basicSalary) + this.da(this.basicSalary) + this.ta(this.basicSalary) + this.basicSalary;
    },
    ns(){
        return this.gs(this.basicSalary) - this.pf(this.basicSalary);
    }
 
 }