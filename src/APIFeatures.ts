class APIFeatures {
    query:any
    constructor(query) {
      this.query = query;
    }
    filtering() {
      // filtering
    const queryObj = { ...this.query };
    const excludedFields = ['page', 'sort', 'limit', 'fields'];
    excludedFields.forEach((el) => delete queryObj[el]);
    // console.log('req.query', query);
    return queryObj;
      
      
    }
    Sorting() {
      // sorting
    let sortOrder = {};
    if (this.query.sort) {
      let sortBy = this.query.sort.split(',');
    //   console.log(sortBy);

      sortBy.forEach((el) => {
        if (el.startsWith('-')) {
          sortOrder[el.slice(1, el.length)] = 'DESC';
        } else {
          sortOrder[el.slice(0, el.length)] = 'ASC';
        }
      });
    } else {
      sortOrder['CreatedAt'] = 'DESC';
    }
    // console.log(sortOrder);
      return sortOrder;
      
    }
    fieldLimit() {
      // IV)Field limiting
      let fields;
      if (this.query.fields) {
        fields = this.query.fields.split(",");
        // console.log(fields);
      }
      return fields;
    }
  
    pagination() {
      // V)Pagination
      const page = +this.query.page || 1;
      const take = +this.query.limit || 10;
      const skip = (page - 1) * take;
    //   console.log(skip);
      return { take, skip };
    }
  }
  module.exports = APIFeatures;
  