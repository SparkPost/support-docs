---
lastUpdated: "03/26/2020"
title: "Maintaining APNs Recipient Lists"
description: "You can maintain AP Ns recipient lists by using a Perl script such as the one shown here The CPAN module Net AP Ns Extended Feedback is used in the following script For more information about this module refer to the CPAN reference page Net AP Ns Extended Feedback..."
---

You can maintain APNs recipient lists by using a Perl script such as the one shown here.

The CPAN module Net::APNs::Extended::Feedback is used in the following script. For more information about this module refer to the CPAN reference page: [Net::APNs::Extended::Feedback](http://search.cpan.org/~xaicron/Net-APNs-Extended-0.02/lib/Net/APNs/Extended/Feedback.pm).

```
#!/opt/msys/3rdParty/bin/perl5.16

use strict;

use Net::APNs::Extended::Feedback;

our ($conf);

# if using separate conf.file, run command: apns_feedback conf.file

#----------- BEGIN of conf.file -----------
$conf = {
  is_sandbox => 1,
  cert_file    => '/path/to/cert',   #### fill me up
  key_file     => '/path/to/key',    #### fill me up
};

sub storeResult {
  my $feedback = shift;
  my $num = scalar(@$feedback);
  print("$num records retrieved!\n");
  if ($num > 0) {
    foreach my $node (@$feedback) {
      #print(ref($node));
      while (my ($key, $value) = each(%$node)) {
        print "$key => $value\n";
      }
    }
  }
}

#----------- END of conf.file -----------

# Enable if read $conf from configuration file
#my $conffile = $ARGV[0];
#do $conffile or die "$@: $conffile does not exist\n";

die "$@: No cert defined\n" if !defined($conf->{cert_file});
die "$@: No key defined\n" if !defined($conf->{key_file});
$conf->{is_sandbox} = '0' if !defined($conf->{is_sandbox});

my $apns = Net::APNs::Extended::Feedback->new(%$conf);
my $feedback = $apns->retrieve_feedback;
# return value is an ArrayRef of Hashrefs
# time_t : epoch time of when the notification was rejected
# token : hex encoded device token
# [
# {
#     time_t    => "1",
# token => "hex123",
#   },
# {
#     time_t    => "2",
# token => "hex987",
#   },
# ];
storeResult($feedback);
```