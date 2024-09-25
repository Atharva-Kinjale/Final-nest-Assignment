import { NotFoundException } from "@nestjs/common";

class APIFeatures {
    query:any
    repo:any
    constructor(query,repo) {
      this.query = query;
      this.repo=repo;
    }
    checkColumnNames(){
      const columns=this.repo.metadata.columns.map(column => column.propertyName);
      
    }
    nullChecking(){
      // ------------------------------------
    // ----Checking whether any empty field is pass and delete it from query---//
    const newObj: any = {};
    Object.entries(this.query).forEach(([key, value]) => {
      // Check if value is not null, undefined, or an empty string
      if (value !== null && value !== undefined && value !== '') {
          newObj[key] = value; // Add the key-value pair to the new object
      }
      });

    // console.log(newObj);
    return newObj
    // ----------------------------------
    }
    filtering() {
      // filtering
    // const queryObj = { ...this.query };
    const queryObj = this.nullChecking();

    const excludedFields = ['page', 'sort', 'limit', 'fields'];
    excludedFields.forEach((el) => delete queryObj[el]);
    console.log('req.query', queryObj);
    
    return queryObj;
     
      
    }
    Sorting() {
      // sorting
    let sortOrder = {};
    if (this.query.sort) {
      let sortBy = this.query.sort.split(',');
      // console.log(sortBy);

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
  