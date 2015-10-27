package org.arnoldc.ast

import org.objectweb.asm.{Opcodes, MethodVisitor, Label}
import org.objectweb.asm.Opcodes._
import org.arnoldc.SymbolTable
import scala.util.Random

case class RandomNode(number: Int) extends NumberNode {
	def generate(mv: MethodVisitor, SymbolTable: SymbolTable) {
		randomizer = new scala.util.Random
		var number = randomizer.nextInt(1000)

		mv.visitIntInsn(SIPUSH, number)
	}
}
