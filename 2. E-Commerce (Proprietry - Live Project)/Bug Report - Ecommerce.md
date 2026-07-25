# QA Bug Report — Ecommerce Platform

> Bugs identified during manual QA testing of the Admin and User sides of a proprietary e-commerce platform.

## Summary

- **Total bugs:** 16
- **Environment:** Staging
- **By panel:** User Side: 14, Admin Side: 2
- **By severity:** Major: 8, Minor: 4, Trivial: 3, Critical: 1
- **By priority:** High: 7, Medium: 5, Low: 4

## Bug Log

| # | Panel | Module | Test Case | Summary | Steps to Reproduce | Expected | Actual | Priority | Severity |
|---|-------|--------|-----------|---------|---------------------|----------|--------|----------|----------|
| 01 | Admin Side | Brands-Create Brand | TC-29 | Verify checkbox in insert link funtionality works as intended | 1. Click create Brand from side panel → 2. Add brand description and select link option → 3. Enter valid info and select uncheck "Open in new window" → 4. Click insert | Link should not open in new window after it is clicked | Not As Expected | Medium | Minor |
| 02 | Admin Side | Brands-Create Brand | TC-30 | Verify fullscreen funtionality works as intended | 1. Click create Brand from side panel → 2. Add brand description and select fullscreen | Description box opens in fullscreen | Not As Expected | Low | Minor |
| 03 | User Side | Home Page | TC-005 | Verify phone number is visible in mobile view | Observe phone number is displayed | Phone number should be present | Not as Expected | Medium | Minor |
| 04 | User Side | Home Page | TC-044 | Verify “Return to top” button appears on scroll | Scroll down | Return to top' button should be present | Not as Expected | Low | Trivial |
| 05 | User Side | Home Page | TC-045 | Verify “Return to top” moves to top when clicked | Click button | Page should scroll to top | Not as Expected | Low | Trivial |
| 06 | User Side | Signup | TC-006 | Signup with email without full stop sign before the word 'com'. | Input email without "full stop sign". Fill rest of the form with valid data and submit | Error Shown and signup fails | Not as expected | High | Major |
| 07 | User Side | Signup | TC-008 | Signup with password that doesn't follow requirements. | Input password with incorect requirements. | Error Shown and signup fails | Not as expected | High | Major |
| 08 | User Side | Signup | TC-011 | Signup with adding invalid data in optional business details section | Signup with incorrect data in optional businnes details section | Error Shown and signup fails | Not As expected | Medium | Minor |
| 09 | User Side | Shop Page | SH-20 | Click product image | Click image | Redirect to product details page | Not As Expected | High | Major |
| 10 | User Side | Checkout | TC-03 | Place order with valid data | Fill form with valid data and Place the order | Order should get placed successfully | Not As Expected | High | Critical |
| 11 | User Side | Checkout | TC-06 | Verify phone number validation | Enter invalid phone | Error should show for wrong number format | Not As Expected | High | Major |
| 12 | User Side | Checkout | TC-12 | Verify Phone number length validation | Enter short number | Error should show for shorter phone number length | Not As Expected | High | Major |
| 13 | User Side | Checkout | TC-13 | Enter Special characters in name field | Enter @@@ | Validation error should appear stating name field can only have alphabets | Not As Expected | Medium | Major |
| 14 | User Side | Checkout | TC-14 | Enter Numeric characters in name field | Enter 123 | Validation error should appear stating name field can only have alphabets | Not As Expected | Medium | Major |
| 15 | User Side | Checkout | TC-15 | Verify item can be removed or their quantity can be changed from checkout page | Remove item →  → Change item quantity or weight →  → Place order | User should be able to remove items or change their values from checkout page | Not As Expected | High | Major |
| 16 | User Side | Checkout | TC-17 | Verify input field highlights after trying to process with incorrect data | Enter data in any field in incorrect format →  → Place the order | Field should get highlighted for user focus | Not As Expected | Low | Trivial |