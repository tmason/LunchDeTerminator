package org.arnoldc.ast

import org.objectweb.asm.{Opcodes, MethodVisitor, Label}
import org.objectweb.asm.Opcodes._
import org.arnoldc.SymbolTable
import scala.util.Random

case class RandomNode(expression: AstNode) extends NumberNode {
	def generate(mv: MethodVisitor, SymbolTable: SymbolTable) {
		var RandomNum = new scala.util.Random
		1 to 1000 map{ _ => RandomNum.nextInt(1)}

		mv.visitIntInsn(SIPUSH, RandomNum)
	}
}