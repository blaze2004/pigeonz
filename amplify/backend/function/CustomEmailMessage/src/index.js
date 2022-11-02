/* Amplify Params - DO NOT EDIT
	AUTH_PIGEONZ607AAEAB_USERPOOLID
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = (event, context, callback) => {
    
    if(event.userPoolId === process.env.AUTH_PIGEONZ607AAEAB_USERPOOLID) {
        if(event.triggerSource === "CustomMessage_SignUp") {
            event.response.emailSubject = "Welcome to PigeonZ";
            event.response.emailMessage = "Welcome to PigeonZ.\n Thank you for signing up for PigeonZ account. Before moving ahead we need to verify it's really you.\n\n" + event.request.codeParameter + " is your verification code.\n\nShubham Tiwari\nPigeonZ";
        }
    }
    callback(null, event);
};

