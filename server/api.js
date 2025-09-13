import express from 'express';

const brevo = require('@getbrevo/brevo');

const apiInstance = new brevo.TransactionalEmailsApi();

apiInstance.setApiKey(
	brevo.TransactionalEmailsApiApiKeys.apiKey,
	'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'
);

const verifyEndpoint = 'https://challenges.cloudflare.com/turnstile/v0/siteverify'
const secret = '0x4AAAAAABntlaDnhK2w9RDsK00ZoUxAojE';

const imagePath = "https://www.glocalassist.com/assets/emailer/";

const apiRouter = express.Router();

const getClientEmailContent = () => `<!DOCTYPE html>
<html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
  <head>
    <title></title>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
    <meta content="width=device-width,initial-scale=1" name="viewport" />
    <!--[if mso]>
		<xml>
			<w:WordDocument
				xmlns:w="urn:schemas-microsoft-com:office:word">
				<w:DontUseAdvancedTypographyReadingMail/>
			</w:WordDocument>
			<o:OfficeDocumentSettings>
				<o:PixelsPerInch>96</o:PixelsPerInch>
				<o:AllowPNG/>
			</o:OfficeDocumentSettings>
		</xml>
		<![endif]-->
    <!--[if !mso]>
		<!-->
    <link href="https://fonts.googleapis.com/css?family=Cabin" rel="stylesheet" type="text/css" />
    <!--
		<![endif]-->
    <style>
      * {
        box-sizing: border-box
      }

      body {
        margin: 0;
        padding: 0
      }

      a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: inherit !important
      }

      #MessageViewBody a {
        color: inherit;
        text-decoration: none
      }

      p {
        line-height: inherit
      }

      .desktop_hide,
      .desktop_hide table {
        mso-hide: all;
        display: none;
        max-height: 0;
        overflow: hidden
      }

      .image_block img+div {
        display: none
      }

      sub,
      sup {
        font-size: 75%;
        line-height: 0
      }

      @media (max-width:700px) {

        .desktop_hide table.icons-inner,
        .social_block.desktop_hide .social-table {
          display: inline-block !important
        }

        .icons-inner {
          text-align: center
        }

        .icons-inner td {
          margin: 0 auto
        }

        .image_block div.fullWidth {
          max-width: 100% !important
        }

        .mobile_hide {
          display: none
        }

        .row-content {
          width: 100% !important
        }

        .stack .column {
          width: 100%;
          display: block
        }

        .mobile_hide {
          min-height: 0;
          max-height: 0;
          max-width: 0;
          overflow: hidden;
          font-size: 0
        }

        .desktop_hide,
        .desktop_hide table {
          display: table !important;
          max-height: none !important
        }

        .reverse {
          display: table;
          width: 100%
        }

        .reverse .column.first {
          display: table-footer-group !important
        }

        .reverse .column.last {
          display: table-header-group !important
        }

        .row-5 td.column.first .border {
          padding: 35px 0 35px 25px
        }

        .row-5 td.column.last .border {
          padding: 0 0 5px
        }
      }
    </style>
    <!--[if mso ]>
		<style>sup, sub { font-size: 100% !important; } sup { mso-text-raise:10% } sub { mso-text-raise:-10% }</style>
		<![endif]-->
  </head>
  <body class="body" style="background-color:#f2f2f2;margin:0;padding:0;-webkit-text-size-adjust:none;text-size-adjust:none">
    <table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-color:#f2f2f2" width="100%">
      <tbody>
        <tr>
          <td>
            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
              <tbody>
                <tr>
                  <td>
                    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;color:#000;width:680px;margin:0 auto" width="680">
                      <tbody>
                        <tr>
                          <td class="column column-1" style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-bottom:5px;padding-top:7px;vertical-align:top" width="100%">
                            <div class="spacer_block block-1" style="height:20px;line-height:20px;font-size:1px"></div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
              <tbody>
                <tr>
                  <td>
                    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-color:#fff;color:#000;width:680px;margin:0 auto" width="680">
                      <tbody>
                        <tr>
                          <td class="column column-1" style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top" width="100%">
                            <div class="spacer_block block-1" style="height:7px;line-height:7px;font-size:1px"></div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-3" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
              <tbody>
                <tr>
                  <td>
                    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-color:#fff;color:#000;padding-bottom:10px;padding-top:10px;width:680px;margin:0 auto" width="680">
                      <tbody>
                        <tr>
                          <td class="column column-1" style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-left:8px;padding-right:10px;padding-top:5px;vertical-align:top" width="100%">
                            <table border="0" cellpadding="0" cellspacing="0" class="image_block block-1" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
                              <tr>
                                <td class="pad" style="padding-left:15px;padding-top:5px;width:100%;padding-right:0">
                                  <div align="center" class="alignment">
                                    <div style="max-width:199px">
                                      <img alt="Logo" height="auto" src="${imagePath}/Glocal_assist_logo_svg.png" style="display:block;height:auto;border:0;width:100%" title="Logo" width="199" />
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-4" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
              <tbody>
                <tr>
                  <td>
                    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-color:#fff;color:#000;width:680px;margin:0 auto" width="680">
                      <tbody>
                        <tr>
                          <td class="column column-1" style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-bottom:5px;padding-top:7px;vertical-align:top" width="100%">
                            <table border="0" cellpadding="0" cellspacing="0" class="divider_block block-1" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
                              <tr>
                                <td class="pad" style="padding-bottom:5px;padding-top:5px">
                                  <div align="center" class="alignment">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
                                      <tr>
                                        <td class="divider_inner" style="font-size:1px;line-height:1px;border-top:3px solid #f2f2f2">
                                          <span style="word-break: break-word;"></span>
                                        </td>
                                      </tr>
                                    </table>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-5" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
              <tbody>
                <tr>
                  <td>
                    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-color:#fff;color:#000;width:680px;margin:0 auto" width="680">
                      <tbody>
                        <tr class="reverse">
                          <td class="column column-1 first" style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-bottom:35px;padding-left:25px;padding-top:35px;vertical-align:top" width="50%">
                            <div class="border">
                              <table border="0" cellpadding="0" cellspacing="0" class="heading_block block-1" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
                                <tr>
                                  <td class="pad" style="padding-left:5px;padding-top:10px;text-align:center;width:100%">
                                    <h1 style="margin:0;color:#27b4dc;direction:ltr;font-family:Cabin,Arial,Helvetica Neue,Helvetica,sans-serif;font-size:13px;font-weight:700;letter-spacing:1px;line-height:1.2;text-align:left;margin-top:0;margin-bottom:0;mso-line-height-alt:16px">
                                      <span class="tinyMce-placeholder" style="word-break: break-word;">THANK YOU FOR CONTACTING US.</span>
                                    </h1>
                                  </td>
                                </tr>
                              </table>
                              <table border="0" cellpadding="0" cellspacing="0" class="heading_block block-2" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
                                <tr>
                                  <td class="pad" style="padding-bottom:10px;padding-left:5px;padding-right:5px;padding-top:5px;text-align:center;width:100%">
                                    <h1 style="margin:0;color:#2f2e41;direction:ltr;font-family:Cabin,Arial,Helvetica Neue,Helvetica,sans-serif;font-size:32px;font-weight:400;letter-spacing:1px;line-height:1.2;text-align:left;margin-top:0;margin-bottom:0;mso-line-height-alt:38px">
                                      <strong>Your Query Is In Good Hands!</strong>
                                    </h1>
                                  </td>
                                </tr>
                              </table>
                              <table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-3" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word" width="100%">
                                <tr>
                                  <td class="pad" style="padding-bottom:10px;padding-left:5px;padding-right:10px;padding-top:10px">
                                    <div style="color:#393d47;direction:ltr;font-family:Cabin,Arial,Helvetica Neue,Helvetica,sans-serif;font-size:15px;font-weight:400;letter-spacing:0;line-height:1.5;text-align:left;mso-line-height-alt:23px">
                                      <p style="margin:0;margin-bottom:16px">We have received your query, and one of our team members is reviewing it as we speak. You can expect a personalized response within the next 24 business hours—often sooner.</p>
                                      <p style="margin:0">Whether you’re exploring services, need support, or just have a few questions, we're here to help.</p>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </div>
                          </td>
                          <td class="column column-2 last" style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-bottom:5px;vertical-align:top" width="50%">
                            <div class="border">
                              <table border="0" cellpadding="0" cellspacing="0" class="image_block block-1" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
                                <tr>
                                  <td class="pad" style="padding-right:20px;padding-top:20px;width:100%;padding-left:0">
                                    <div align="center" class="alignment">
                                      <div class="fullWidth" style="max-width:300px">
                                        <img alt="Glocal Studio" height="auto" src="${imagePath}/main.jpg" style="display:block;height:auto;border:0;width:100%" title="Glocal Studio" width="300" />
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-6" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
              <tbody>
                <tr>
                  <td>
                    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-color:#fff;color:#000;width:680px;margin:0 auto" width="680">
                      <tbody>
                        <tr>
                          <td class="column column-1" style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top" width="100%">
                            <div class="spacer_block block-1" style="height:10px;line-height:10px;font-size:1px"></div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-7" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
              <tbody>
                <tr>
                  <td>
                    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;color:#000;width:680px;margin:0 auto" width="680">
                      <tbody>
                        <tr>
                          <td class="column column-1" style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top" width="100%">
                            <div class="spacer_block block-1" style="height:20px;line-height:20px;font-size:1px"></div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-8" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-size:auto" width="100%">
              <tbody>
                <tr>
                  <td>
                    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-size:auto;background-color:#fff;color:#000;width:680px;margin:0 auto" width="680">
                      <tbody>
                        <tr>
                          <td class="column column-1" style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-bottom:15px;padding-left:25px;padding-right:25px;padding-top:25px;vertical-align:top" width="100%">
                            <table border="0" cellpadding="5" cellspacing="0" class="heading_block block-1" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
                              <tr>
                                <td class="pad">
                                  <h1 style="margin:0;color:#2f2e41;direction:ltr;font-family:Cabin,Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:23px;font-weight:400;letter-spacing:1px;line-height:1.2;text-align:left;margin-top:0;margin-bottom:0;mso-line-height-alt:28px">
                                    <strong>What Happens Next?</strong>
                                  </h1>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-9" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
              <tbody>
                <tr>
                  <td>
                    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-color:#fff;color:#000;padding-left:20px;padding-right:20px;width:680px;margin:0 auto" width="680">
                      <tbody>
                        <tr>
                          <td class="column column-1" style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-bottom:5px;padding-left:5px;padding-right:5px;padding-top:5px;vertical-align:top" width="33.333333333333336%">
                            <table border="0" cellpadding="0" cellspacing="0" class="image_block block-1" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
                              <tr>
                                <td class="pad" style="width:100%;padding-right:0;padding-left:0">
                                  <div align="center" class="alignment">
                                    <div style="max-width:203.333px">
                                      <img alt="Glocal Studio" height="auto" src="${imagePath}/1.jpg" style="display:block;height:auto;border:0;width:100%" title="Glocal Studio" width="203.333" />
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </table>
                            <table border="0" cellpadding="20" cellspacing="0" class="heading_block block-2" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
                              <tr>
                                <td class="pad">
                                  <h1 style="margin:0;color:#000;direction:ltr;font-family:Cabin,Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:16px;font-weight:700;letter-spacing:1px;line-height:1.2;text-align:center;margin-top:0;margin-bottom:0;mso-line-height-alt:19px">We review your message carefully</h1>
                                </td>
                              </tr>
                            </table>
                          </td>
                          <td class="column column-2" style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-bottom:5px;padding-left:5px;padding-right:5px;padding-top:5px;vertical-align:top" width="33.333333333333336%">
                            <table border="0" cellpadding="0" cellspacing="0" class="image_block block-1" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
                              <tr>
                                <td class="pad" style="width:100%;padding-right:0;padding-left:0">
                                  <div align="center" class="alignment">
                                    <div style="max-width:203.333px">
                                      <img alt="Glocal Studio" height="auto" src="${imagePath}/2.jpg" style="display:block;height:auto;border:0;width:100%" title="Glocal Studio" width="203.333" />
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </table>
                            <table border="0" cellpadding="20" cellspacing="0" class="heading_block block-2" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
                              <tr>
                                <td class="pad">
                                  <h1 style="margin:0;color:#000;direction:ltr;font-family:Cabin,Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:16px;font-weight:700;letter-spacing:1px;line-height:1.2;text-align:center;margin-top:0;margin-bottom:0;mso-line-height-alt:19px">We’ll contact you with more info or next steps</h1>
                                </td>
                              </tr>
                            </table>
                          </td>
                          <td class="column column-3" style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-bottom:5px;padding-left:5px;padding-right:5px;padding-top:5px;vertical-align:top" width="33.333333333333336%">
                            <table border="0" cellpadding="0" cellspacing="0" class="image_block block-1" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
                              <tr>
                                <td class="pad" style="width:100%;padding-right:0;padding-left:0">
                                  <div align="center" class="alignment">
                                    <div style="max-width:203.333px">
                                      <img alt="Glocal Studio" height="auto" src="${imagePath}/3.jpg" style="display:block;height:auto;border:0;width:100%" title="Glocal Studio" width="203.333" />
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </table>
                            <table border="0" cellpadding="20" cellspacing="0" class="heading_block block-2" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
                              <tr>
                                <td class="pad">
                                  <h1 style="margin:0;color:#000;direction:ltr;font-family:Cabin,Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:16px;font-weight:700;letter-spacing:1px;line-height:1.2;text-align:center;margin-top:0;margin-bottom:0;mso-line-height-alt:19px">You’ll hear from us within 24 hours</h1>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-10" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
              <tbody>
                <tr>
                  <td>
                    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-color:#fff;color:#000;width:680px;margin:0 auto" width="680">
                      <tbody>
                        <tr>
                          <td class="column column-1" style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-bottom:15px;padding-top:10px;vertical-align:top" width="100%">
                            <table border="0" cellpadding="0" cellspacing="0" class="heading_block block-1" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
                              <tr>
                                <td class="pad" style="padding-bottom:20px;padding-left:30px;padding-right:30px;padding-top:20px;text-align:center;width:100%">
                                  <h1 style="margin:0;color:#2f2e41;direction:ltr;font-family:Cabin,Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:18px;font-weight:400;letter-spacing:1px;line-height:1.2;text-align:center;margin-top:0;margin-bottom:0;mso-line-height-alt:22px">
                                    <strong>In the meantime, feel free to explore more about what we do and how we can serve you best.</strong>
                                  </h1>
                                </td>
                              </tr>
                            </table>
                            <table border="0" cellpadding="0" cellspacing="0" class="button_block block-2" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
                              <tr>
                                <td class="pad" style="padding-bottom:15px;padding-left:10px;padding-right:10px;padding-top:15px;text-align:center">
                                  <div align="center" class="alignment">
                                    <a href="www.glocalassist.com" style="color:#ffffff;text-decoration:none;" target="_blank">
                                      <!--[if mso]>
																			<v:roundrect
																				xmlns:v="urn:schemas-microsoft-com:vml"
																				xmlns:w="urn:schemas-microsoft-com:office:word"  href="www.glocalassist.com"  style="height:38px;width:162px;v-text-anchor:middle;" arcsize="0%" fillcolor="#4042e2">
																				<v:stroke dashstyle="Solid" weight="0px" color="#8a3b8f"/>
																				<w:anchorlock/>
																				<v:textbox inset="0px,0px,0px,0px">
																					<center dir="false" style="color:#ffffff;font-family:sans-serif;font-size:14px">
																						<![endif]-->
                                      <span class="button" style="background-color: #4042e2; border-bottom: 0px solid #8a3b8f; border-left: 0px solid #8a3b8f; border-radius: 0px; border-right: 0px solid #8a3b8f; border-top: 0px solid #8a3b8f; color: #ffffff; display: inline-block; font-family: Cabin, Arial, Helvetica Neue, Helvetica, sans-serif; font-size: 14px; font-weight: 400; mso-border-alt: none; padding-bottom: 5px; padding-top: 5px; padding-left: 35px; padding-right: 35px; text-align: center; width: auto; word-break: keep-all; letter-spacing: 1px;">
                                        <span style="word-break: break-word;">
                                          <span data-mce-style="" style="word-break: break-word; line-height: 28px;">
                                            <strong>Explore More</strong>
                                          </span>
                                        </span>
                                      </span>
                                      <!--[if mso]>
																					</center>
																				</v:textbox>
																			</v:roundrect>
																			<![endif]-->
                                    </a>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-11" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
              <tbody>
                <tr>
                  <td>
                    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-color:#fff;color:#000;width:680px;margin:0 auto" width="680">
                      <tbody>
                        <tr>
                          <td class="column column-1" style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-bottom:5px;padding-top:7px;vertical-align:top" width="100%">
                            <div class="spacer_block block-1" style="height:25px;line-height:25px;font-size:1px"></div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-12" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
              <tbody>
                <tr>
                  <td>
                    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;color:#000;width:680px;margin:0 auto" width="680">
                      <tbody>
                        <tr>
                          <td class="column column-1" style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-bottom:5px;padding-left:25px;padding-right:25px;padding-top:7px;vertical-align:top" width="100%">
                            <div class="spacer_block block-1" style="height:30px;line-height:30px;font-size:1px"></div>
                            <table border="0" cellpadding="5" cellspacing="0" class="heading_block block-2" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
                              <tr>
                                <td class="pad">
                                  <h1 style="margin:0;color:#575c66;direction:ltr;font-family:Cabin,Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:18px;font-weight:400;letter-spacing:1px;line-height:1.2;text-align:center;margin-top:0;margin-bottom:0;mso-line-height-alt:22px">
                                    <strong>Have any questions? <a href="example.com" rel="noopener" style="text-decoration: none; color: #27b4dc;" target="_blank">Contact us!</a>
                                      <br />
                                      <br />
                                      <a href="tel:+17323444260" style="text-decoration: underline; color: #27b4dc;">+1 (732) 344 4260</a>
                                      <br />
                                      <br />
                                      <a href="tel:+919179387208" style="text-decoration: underline; color: #27b4dc;">+91 (917) 938 7208</a>
                                      <br />
                                      <br />
                                      <a href="mailto:enquiry@glocalassist.com" style="text-decoration: underline; color: #27b4dc;">enquiry@glocalassist.com</a>
                                      <a href="example.com" rel="noopener" style="text-decoration: none; color: #27b4dc;" target="_blank"></a>
                                    </strong>
                                  </h1>
                                </td>
                              </tr>
                            </table>
                            <div class="spacer_block block-3" style="height:30px;line-height:30px;font-size:1px"></div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-13" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
              <tbody>
                <tr>
                  <td>
                    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;color:#000;width:680px;margin:0 auto" width="680">
                      <tbody>
                        <tr>
                          <td class="column column-1" style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-bottom:5px;padding-top:5px;vertical-align:top" width="100%">
                            <table border="0" cellpadding="5" cellspacing="0" class="divider_block block-1" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
                              <tr>
                                <td class="pad">
                                  <div align="center" class="alignment">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
                                      <tr>
                                        <td class="divider_inner" style="font-size:1px;line-height:1px;border-top:1px solid #7b7b7b">
                                          <span style="word-break: break-word;"></span>
                                        </td>
                                      </tr>
                                    </table>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-14" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
              <tbody>
                <tr>
                  <td>
                    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;color:#000;width:680px;margin:0 auto" width="680">
                      <tbody>
                        <tr>
                          <td class="column column-1" style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-bottom:5px;padding-top:5px;vertical-align:top" width="100%">
                            <table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-1" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word" width="100%">
                              <tr>
                                <td class="pad" style="padding-bottom:15px;padding-left:10px;padding-right:10px;padding-top:10px">
                                  <div style="color:#39374e;direction:ltr;font-family:Cabin,Arial,Helvetica Neue,Helvetica,sans-serif;font-size:12px;font-weight:400;letter-spacing:0;line-height:1.5;text-align:center;mso-line-height-alt:18px">
                                    <p style="margin:0;margin-bottom:0">Stay up-to-date with current activities and future events by following us on your favorite social media channels.</p>
                                    <p style="margin:0"> Changed your mind? <strong>
                                        <a href="*|UNSUB|*" rel="noopener" style="color: #fe7062;" target="_blank">Unsubscribe</a>
                                      </strong>
                                    </p>
                                  </div>
                                </td>
                              </tr>
                            </table>
                            <table border="0" cellpadding="0" cellspacing="0" class="social_block block-2" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
                              <tr>
                                <td class="pad" style="padding-bottom:5px;padding-left:10px;padding-right:10px;padding-top:5px;text-align:center">
                                  <div align="center" class="alignment">
                                    <table border="0" cellpadding="0" cellspacing="0" class="social-table" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;display:inline-block" width="184px">
                                      <tr>
                                        <td style="padding:0 7px 0 7px">
                                          <a href="https://www.facebook.com/glocalassist/" target="_blank">
                                            <img alt="Facebook" height="auto" src="${imagePath}/facebook2x.png" style="display:block;height:auto;border:0" title="Facebook" width="32" />
                                          </a>
                                        </td>
                                        <td style="padding:0 7px 0 7px">
                                          <a href="https://twitter.com/AssistGlocal" target="_blank">
                                            <img alt="Twitter" height="auto" src="${imagePath}/twitter2x.png" style="display:block;height:auto;border:0" title="Twitter" width="32" />
                                          </a>
                                        </td>
                                        <td style="padding:0 7px 0 7px">
                                          <a href="https://www.instagram.com/assistglocal/" target="_blank">
                                            <img alt="Instagram" height="auto" src="${imagePath}/instagram2x.png" style="display:block;height:auto;border:0" title="Instagram" width="32" />
                                          </a>
                                        </td>
                                        <td style="padding:0 7px 0 7px">
                                          <a href="https://www.linkedin.com/company/glocalassist-technology-virtualassistant/" target="_blank">
                                            <img alt="LinkedIn" height="auto" src="${imagePath}/linkedin2x.png" style="display:block;height:auto;border:0" title="LinkedIn" width="32" />
                                          </a>
                                        </td>
                                      </tr>
                                    </table>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- End -->
  </body>
</html>`;

const handleSendEmail = (formData, res) => {
	const {
		name,
		email,
		phone,
		service_info: serviceInfo,
		page_url: pageUrl
	} = formData;

	const sendAdminEmail = new brevo.SendSmtpEmail();

	sendAdminEmail.subject = 'New Contact Query Received!';
	sendAdminEmail.htmlContent = `
		<html>
		<body>
			Dear Admin,<br /><br />
			At the outset Glocal Studio has received a new contact enquiry. Please find the details below:<br />
			Name: ${name}<br />
			Email: ${email}<br />
			Phone: ${phone}<br />
			Service Info: ${serviceInfo}<br />
			Page: ${pageUrl}<br /><br />
			Request you to please get in touch as soon as possible.<br /><br />
			Thank You.
		</body>
		</html>`;
	sendAdminEmail.sender = {
		email: 'info@glocalassist.com',
		name: 'Glocal Studio'
	};
	sendAdminEmail.to = [{
		email: "info@glocalassist.com",
		name: "Glocal Studio"
	}];
	sendAdminEmail.replyTo = {
		"email": email,
		"name": `${name}`,
	};

	const sendClientEmail = new brevo.SendSmtpEmail();

	sendClientEmail.subject = "Thanks for Reaching Out - We'll Get Back to You Soon!";
	sendClientEmail.htmlContent = getClientEmailContent(name);
	sendClientEmail.sender = {
		email: 'info@glocalassist.com',
		name: 'Glocal Studio'
	};
	sendClientEmail.to = [{
		email,
		name
	}];
	sendClientEmail.replyTo = {
		"email": 'info@glocalassist.com',
		"name": 'Glocal Studio'
	};

	Promise.all([
		apiInstance.sendTransacEmail(sendAdminEmail),
		apiInstance.sendTransacEmail(sendClientEmail)
	]).then(() => {
		res.send({
			success: true,
			message: "Thanks for Reaching Out - We'll Get Back to You Soon!",
		});
	}).catch(() => {
		res.status(500);
		res.send({
			success: false,
			message: "Sorry! Something went wrong."
		});
	});
}

apiRouter.post('/submit-form', (req, res) => {
  const { captchaToken } = req.body;

	fetch(verifyEndpoint, {
    method: 'POST',
    body: JSON.stringify({
      secret,
      response: captchaToken
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
		.then((response) => response.json())
		.then(() => {
			handleSendEmail(req.body, res);
		})
		.catch(() => {
			res.status(500);
			res.send({
				success: false,
				message: "Recaptcha verification failed. Please try again."
			});
		});
});

export default apiRouter;
