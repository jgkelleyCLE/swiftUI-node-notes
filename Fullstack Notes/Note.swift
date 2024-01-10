//
//  Note.swift
//  Fullstack Notes
//
//  Created by Jack Kelley on 1/10/24.
//

import Foundation
import SwiftUI

struct Note: Identifiable, Codable {
    var id: String {_id}
    var _id: String
    var text: String
}
