module "settings" {
  source = "git@github.com:360incentives/terraform.git//test"
}

module "deTerminator_private_http" {
  source = "git@github.com:360incentives/terraform.git//private_http"

  aws_region = "${var.aws_region}"
  aws_access_key = "${var.aws_access_key}"
  aws_secret_key = "${var.aws_secret_key}"

  name = "deTerminator"
  environment = "test"
  us-east-1c-subnet_id = "${module.settings.us-east-1c-services-subnet_id}"
  instance_type = "${module.settings.instance_type}"
  ami = "${module.settings.codedeploy_ami}"
  size = "${var.size}"
}
