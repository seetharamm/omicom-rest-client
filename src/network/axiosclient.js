const axios = require('axios').create({
});

const headers = '';
const payload = '';
const url = '';
const get = async function(url)
{
   let res = await axios.get(url);

  let data = res.data;
  console.log(data);
  return data;
}
const post = async function(props)
{

   return await axios.post(url,payload,headers);
}
const put = async function(props)
{
   return await axios.put(url,payload,headers);
}
const del = async function(props)
{
   return await axios.delete(props.url);
}
const patch = async function(props)
{
   return await axios.patch(url,payload,headers);
}
module.exports = {
    get,
    put,
    del,
    put,
    patch
}
