module.exports = async function (context, req) {
   context.res.json({
        text : "Hello from your API!"
    });
   //context.res = {
   // body: { text : "Hello from your API!" }
    //};
//context.done();

};