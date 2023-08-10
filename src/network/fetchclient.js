

const headers = '';
const payload = '';
const url = '';
async function get(data) {
    try {
      const response = await fetch(data.url, {
      });
  
      const result = await response.json();
      return result;
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
    
  }
async function post(data) {
    try {
      const response = await fetch(data.url, {
        method: data.method, // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  }
const put = async function(props)
{
   return await fetch.put(url,payload,headers);
}
const del = async function(props)
{
   return await fetch.delete(props.url);
}
const patch = async function(props)
{
   return await fetch.patch(url,payload,headers);
}
module.exports = {
    get,
    
    post
}
