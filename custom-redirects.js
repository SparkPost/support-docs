const customRedirects = [
  {
    // The site does not have a home page
    // This redirects to support docs
    source: '/',
    destination: '/docs/',
    permanent: true,
  },
  // This path was accidentally used in the public announcement email
  {
    source: "/docs/user-guide/automatic-inline-seeding-user-guide/",
    destination: "/docs/user-guide/automatic-inline-seeds/",
    permanent: true
  },

  // This path was accidentally used in the internal announcement email
  {  
    source: "/docs/user-guide/automatic-inline-seeding/",
    destination: "/docs/user-guide/automatic-inline-seeds/",
    permanent: true
  },

  // TODO: the following redirects should be monitored and if they are no longer being used
  //  they should be removed
  {
    source: "/docs/billing/common-billing-questions/",
    destination: "/docs/billing/common-billing-errors/",
    permanent: true
  },

  {
    source: "/docs/faq/dkim-record-verify/",
    destination: "/docs/faq/dkim-wont-verify/",
    permanent: true
  },

  {
    source: "/docs/integrations/ecampaign-11/",
    destination: "/docs/integrations/e-campaign-11/",
    permanent: true
  },

  {
    source: "/docs/integrations/push-notifications-sparkpost-enterprise/",
    destination: "/docs/integrations/",
    permanent: true
  },

  {
    source: "/docs/introduction/",
    destination: "/docs/",
    permanent: true
  },

  {
    source: "/docs/my-account-and-profile/scim-user-provisioning-okta/",
    destination: "/docs/my-account-and-profile/scim/",
    permanent: true
  },

  {
    source: "/docs/reporting/coming-soon-data-rollups/",
    destination: "/docs/reporting/data-rollups/",
    permanent: true
  },

  {
    source: "/docs/reporting/reporting-and-analytics/",
    destination: "/docs/reporting/",
    permanent: true
  },

  {
    source: "/docs/reporting/signals-analytics/",
    destination: "/docs/reporting/",
    permanent: true
  },

  {
    source: "/docs/signals/overview/",
    destination: "/docs/reporting/",
    permanent: true
  },

  {
    source: "/docs/signals/user-guide/overview/",
    destination: "/docs/reporting/",
    permanent: true
  },

  {
    source: "/docs/tech-resources/enabling-inbound-email/",
    destination: "/docs/tech-resources/inbound-email-relay-webhook/",
    permanent: true
  },

  {
    source: "/docs/tech-resources/ios-universal-links/",
    destination: "/docs/tech-resources/deep-links-self-serve/",
    permanent: true
  },

  {
    source: "/docs/tech-resources/managing-webhook-data/",
    destination: "/docs/tech-resources/webhook-data-streams/",
    permanent: true
  },

  {
    source: "/docs/tech-resources/recipient-validation-sparkpost/",
    destination: "/docs/recipient-validation/getting-started-recipient-validation/",
    permanent: true
  },

  {
    source: "/docs/transmissions-api/",
    destination: "https://developers.sparkpost.com/api/transmissions/#transmissions",
    permanent: true
  },

  {
    source: "/docs/user-guide/managing-sending-domains/",
    destination: "/docs/getting-started/setting-up-domains/",
    permanent: true
  },

  {
    source: "/docs/user-guide/mandrill-migration-guide/",
    destination: "https://www.sparkpost.com/migration-guides/mandrill/",
    permanent: true
  },

  {
    source: "/docs/user-guide/migrating-from-sendgrid",
    destination: "https://www.sparkpost.com/migration-guides/sendgrid/",
    permanent: true
  },

  {
    source: "/docs/user-guide/overview/",
    destination: "/docs/user-guide/",
    permanent: true
  },

  {
    source: "/docs/user-guide/signals/",
    destination: "/docs/reporting/",
    permanent: true
  },

  {
    source: "/docs/using-unsubscribe-events/",
    destination: "/docs/user-guide/setting-up-unsubscribe-links/",
    permanent: true
  },

  {
    source: "/docs/api/a-b-testing-sparkpost/",
    destination: "/docs/tech-resources/a-b-testing-sparkpost/",
    permanent: true
  },

  {
    source: "/docs/api/download-suppression-list/",
    destination: "/docs/tech-resources/download-suppression-list/",
    permanent: true
  },

  {
    source: "/docs/api/managing-sending-domains/",
    destination: "/docs/tech-resources/managing-sending-domains/",
    permanent: true
  },

  {
    source: "/docs/getting-started/creating-sending-domains/",
    destination: "/docs/getting-started/getting-started-sparkpost/#preparing-your-from-address",
    permanent: true
  },

  {
    source: "/docs/getting-started/sending-your-first-email/",
    destination: "/docs/getting-started/getting-started-sparkpost/#sending-email",
    permanent: true
  },

  {
    source: "/docs/getting-started/setting-up-dkim-with-domain-providers/",
    destination: "/docs/getting-started/getting-started-sparkpost/",
    permanent: true
  },

  {
    source: "/docs/getting-started/sparkpost-new-user-guide/",
    destination: "/docs/getting-started/getting-started-sparkpost/",
    permanent: true
  },

  {
    source: "/docs/getting-started/verify-sending-domains/",
    destination: "/docs/getting-started/getting-started-sparkpost/#step-2-verify-domain",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2139249",
    destination: "/docs/tech-resources/enabling-multiple-custom-tracking-domains/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2458110",
    destination: "/docs/faq/recipient-address-was-suppressed-due-to-customer-policy/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2458146",
    destination: "/docs/faq/post-to-webhook-target-failed/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2142595",
    destination: "/docs/faq/profile-info/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/1974248",
    destination: "/docs/faq/recipient-address-was-suppressed-due-to-customer-policy/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2038351",
    destination: "/docs/faq/recipient-address-was-suppressed-due-to-system-policy/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/1955060",
    destination: "/docs/faq/relaying-denied-error/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2461190",
    destination: "/docs/faq/retrieve-bounce-info/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/1988470",
    destination: "/docs/faq/smtp-connection-problems/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2003491",
    destination: "/docs/faq/storing-images/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2087911",
    destination: "/docs/faq/suppression-timing/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2444819",
    destination: "/docs/faq/understanding-delays-bounces/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2560839",
    destination: "/docs/faq/using-sink-server/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/1950126",
    destination: "/docs/faq/why-configure-dkim/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2179779",
    destination: "/docs/getting-started/benefits-role-domains/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/1933377",
    destination: "/docs/getting-started/create-api-keys/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/1933318",
    destination: "/docs/getting-started/creating-sending-domains/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/1929890",
    destination: "/docs/getting-started/creating-template/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2456522",
    destination: "/docs/getting-started/how-to-get-help/",
    permanent: true
  },

  {
    source: "/customer/portal/topics/770787",
    destination: "/docs/getting-started/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/1929893",
    destination: "/docs/getting-started/previewing-and-sending-test-emails/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2661031",
    destination: "/docs/getting-started/requirements-for-sending-domains/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/1929887",
    destination: "/docs/getting-started/sending-your-first-email/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2034498",
    destination: "/docs/getting-started/setting-up-dkim-with-domain-providers/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2034521",
    destination: "/docs/getting-started/setting-up-domains/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2778789",
    destination: "/docs/getting-started/signing-up-valid-email-address/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2670627",
    destination: "/docs/getting-started/sparkpost-new-user-guide/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/1933360",
    destination: "/docs/getting-started/verify-sending-domains/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2750871",
    destination: "/docs/getting-started/what-counts-daily-monthly-usage/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2092471",
    destination: "/docs/integrations/atomic-mail-sender/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2455133",
    destination: "/docs/integrations/calling-sparkpost-from-browser/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2040317",
    destination: "/docs/integrations/direct-mail/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2340644",
    destination: "/docs/integrations/discourse/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2169630",
    destination: "/docs/integrations/django/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2092525",
    destination: "/docs/integrations/e-campaign-11/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2039973",
    destination: "/docs/integrations/easy-mail/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2278407",
    destination: "/docs/integrations/elixir/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2039925",
    destination: "/docs/integrations/exim/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2032944",
    destination: "/docs/integrations/group-mail/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2046445",
    destination: "/docs/integrations/hoolie/",
    permanent: true
  },

  {
    source: "/customer/portal/topics/780292",
    destination: "/docs/integrations/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2780873",
    destination: "/docs/integrations/joomla/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2045652",
    destination: "/docs/integrations/mac-mail/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2356667",
    destination: "/docs/integrations/magento/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2036581",
    destination: "/docs/integrations/mail-wizz/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2160178",
    destination: "/docs/integrations/marketing-rocket/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/1930046",
    destination: "/docs/integrations/ongage/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2082477",
    destination: "/docs/integrations/patch-interspire-email-marketer/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2782464",
    destination: "/docs/integrations/php-list/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2782409",
    destination: "/docs/integrations/phpbb/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2030960",
    destination: "/docs/integrations/postfix/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2177799",
    destination: "/docs/integrations/power-bi/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2155339",
    destination: "/docs/integrations/power-mta/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2477781",
    destination: "/docs/integrations/push-notifications-sparkpost-enterprise/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2036575",
    destination: "/docs/integrations/send-blaster/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2455201",
    destination: "/docs/my-account-and-profile/account-suspension/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2467929",
    destination: "/docs/my-account-and-profile/changing-your-account-email-address/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/1948449",
    destination: "/docs/my-account-and-profile/enabling-two-factor-authentication/",
    permanent: true
  },

  {
    source: "/customer/portal/topics/779853",
    destination: "/docs/my-account-and-profile/",
    permanent: true
  },

  {
    source: "/customer/portal/topics/815732",
    destination: "/docs/reporting/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2240051",
    destination: "/docs/reporting/message-events/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2524845",
    destination: "/docs/reporting/metrics-definitions/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/1929895",
    destination: "/docs/reporting/reporting-and-analytics/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2661260",
    destination: "/docs/faq/error-messages-smtp/",
    permanent: true
  },

  {
    source: "/customer/portal/topics/764218",
    destination: "/docs/faq/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2314148",
    destination: "/docs/tech-resources/abuse-postmaster-google-apps/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2754251",
    destination: "/docs/tech-resources/android-digital-asset-links/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2085201",
    destination: "/docs/tech-resources/binding-groups/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2247030",
    destination: "/docs/tech-resources/change-log-sparkpost-enterprise/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/1936102",
    destination: "/docs/tech-resources/change-log-sparkpost/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2371794",
    destination: "/docs/tech-resources/custom-bounce-domain/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2039614",
    destination: "/docs/tech-resources/enabling-inbound-email/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2707424",
    destination: "/docs/tech-resources/enabling-multiple-custom-tracking-domains/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2140916",
    destination: "/docs/tech-resources/extended-error-codes/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2676543",
    destination: "/docs/tech-resources/extracting-email-attachments-from-relay-webhooks/",
    permanent: true
  },

  {
    source: "/customer/portal/topics/782250",
    destination: "/docs/tech-resources/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2089764",
    destination: "/docs/tech-resources/list-unsubscribe-functionality/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2220552",
    destination: "/docs/tech-resources/managing-webhook-data/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2115678",
    destination: "/docs/tech-resources/skip-suppression-functionality/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2539063",
    destination: "/docs/tech-resources/smtp-engagement-tracking/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/1980377",
    destination: "/docs/tech-resources/smtp-injection-with-starttls-using-swaks/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2429473",
    destination: "/docs/tech-resources/smtp-rest-api-performance/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2112385",
    destination: "/docs/tech-resources/webhook-authentication/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/1976204",
    destination: "/docs/tech-resources/webhook-event-reference/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2558436",
    destination: "/docs/user-guide/consolidating-accounts/",
    permanent: true
  },

  {
    source: "/customer/portal/topics/779849",
    destination: "/docs/user-guide/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2216798",
    destination: "/docs/user-guide/managing-sending-domains/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2350727",
    destination: "/docs/user-guide/mandrill-migration-guide/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2458291",
    destination: "/docs/user-guide/remove-list-unsubscribe-header/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2214831",
    destination: "/docs/user-guide/sending-attachments/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/1929894",
    destination: "/docs/user-guide/setting-up-unsubscribe-links/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2360320",
    destination: "/docs/user-guide/subaccounts/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2249268",
    destination: "/docs/user-guide/transmission-best-practices/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2237907",
    destination: "/docs/user-guide/unconfigured-sending-domain/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2351320",
    destination: "/docs/user-guide/uploading-recipient-list/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/1929891",
    destination: "/docs/user-guide/using-suppression-lists/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/1929976",
    destination: "/docs/user-guide/using-unsubscribe-reports/",
    permanent: true
  },

  {
    source: "/customer/en/portal/:path*",
    destination: "/customer/portal/:path*",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2472157",
    destination: "/docs/getting-started/sparkpost-new-user-guide/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2361300",
    destination: "/docs/faq/using-sink-server/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2756679",
    destination: "/docs/api/a-b-testing-sparkpost/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/1930049",
    destination: "/docs/integrations/send-with-us/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2092518",
    destination: "/docs/integrations/thunder-mailer/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2207582",
    destination: "/docs/integrations/using-sparkpost-heroku-add-on/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2409547",
    destination: "/docs/integrations/using-templates-sparkpost-wordpress/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2463012",
    destination: "/docs/billing/common-billing-errors/",
    permanent: true
  },

  {
    source: "/customer/portal/topics/770788",
    destination: "/docs/billing/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2035665",
    destination: "/docs/billing/upgrading-your-account/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/1929897",
    destination: "/docs/billing/usage-report-and-account-limits/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2039628",
    destination: "/docs/deliverability/global-suppression-list/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/1929896",
    destination: "/docs/deliverability/bounce-classification-codes/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/1972209",
    destination: "/docs/deliverability/ip-warm-up-overview/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2002977",
    destination: "/docs/deliverability/dedicated-ip-pools/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2133774",
    destination: "/docs/deliverability/delivery-errors-when-sending-to-gmail-subscribers/",
    permanent: true
  },

  {
    source: "/customer/portal/topics/779851",
    destination: "/docs/deliverability/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2460212",
    destination: "/docs/deliverability/managing-dedicated-ip-pools/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2396826",
    destination: "/docs/deliverability/optimizing-deliverability-and-inbox-placement/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2521756",
    destination: "/docs/deliverability/spf-and-ip4-mechanisms/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2124161",
    destination: "/docs/faq/abuse-sparkpost-com-is-not-returning-my-emails/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/1929977",
    destination: "/docs/faq/access-rest-apis/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/1929982",
    destination: "/docs/faq/after-receiving-a-250-ok-why-are-messages-being-rejected/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2615300",
    destination: "/docs/faq/are-you-sending-emails-as-encrypted-messages/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2458261",
    destination: "/docs/faq/can-attachments-be-sent-when-using-templates/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2457916",
    destination: "/docs/faq/can-i-send-from-any-domain/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2113763",
    destination: "/docs/faq/cancel-my-account/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2164371",
    destination: "/docs/faq/cc-bcc-archive-recipients/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2432290",
    destination: "/docs/faq/cc-bcc-with-rest-api/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2457861",
    destination: "/docs/faq/css-inlining/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2030894",
    destination: "/docs/faq/daily-and-monthly-quota-limits/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/1929984",
    destination: "/docs/faq/dkim-wont-verify/",
    permanent: true
  },

  {
    source: "/customer/portal/topics/777406",
    destination: "/docs/faq/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/1940360",
    destination: "/docs/faq/does-sparkpost-dedupe/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2588293",
    destination: "/docs/faq/gmail-shows-mailing-list/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2241721",
    destination: "/docs/faq/how-are-messages-retried/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2456461",
    destination: "/docs/faq/international-smtp-performance/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2537369",
    destination: "/docs/faq/messages-attempted/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2457866",
    destination: "/docs/faq/migrating-mandrill-templates/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/2120938",
    destination: "/docs/faq/out-of-band-bounces/",
    permanent: true
  },

  {
    source: "/customer/portal/articles/1929979",
    destination: "/docs/faq/missing-click-open-data/",
    permanent: true
  },

]


module.exports = customRedirects;