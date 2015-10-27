variable "aws_region" {
  description = "AWS region to launch servers."
  default = "us-east-1"
}

variable "aws_access_key" {
  description = "AWS Access Key"
}

variable "aws_secret_key" {
  description = "AWS Secret Key matching Access Key"
}

variable "size" {
  description = "The number of instances to run in the Auto Scaling Group."
  default = 1
}
